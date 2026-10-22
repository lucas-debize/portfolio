import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

// Charge les routes API Vercel si disponibles
const apiHandlers = {};
try {
  const healthMod = await import("./api/health.js");
  apiHandlers["/api/health"] = healthMod.default;
} catch {}
try {
  const aiStatusMod = await import("./api/ai-status.js");
  apiHandlers["/api/ai-status"] = aiStatusMod.default;
} catch {}
try {
  const chatMod = await import("./api/chat.js");
  apiHandlers["/api/chat"] = chatMod.default;
} catch {}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Adapteurs Express / Vercel pour res.status et res.json
  res.status = function (code) {
    res.statusCode = code;
    return res;
  };
  res.json = function (data) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(data));
  };

  // Route API
  if (pathname.startsWith("/api/")) {
    const handler = apiHandlers[pathname];
    if (handler) {
      let rawBody = "";
      for await (const chunk of req) {
        rawBody += chunk;
      }
      try {
        req.body = rawBody ? JSON.parse(rawBody) : {};
      } catch {
        req.body = {};
      }
      try {
        await handler(req, res);
      } catch (err) {
        console.error("API error:", err);
        res.status(500).json({ error: "Internal server error" });
      }
      return;
    }
  }

  // Fichiers statiques
  if (pathname === "/") {
    pathname = "/index.html";
  }

  const filePath = path.join(__dirname, pathname);

  // Sécurité traversée de dossier
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio disponible en local sur http://localhost:${PORT}`);
});
