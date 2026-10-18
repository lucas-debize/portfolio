import { KNOWLEDGE } from "./knowledge.js";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json({
    status: "ok",
    profile: "Lucas Debize",
    lastSyncedAt: KNOWLEDGE.lastSyncedAt,
    projectsCount: KNOWLEDGE.projects?.length || 0,
    projects: KNOWLEDGE.projects?.map((p) => p.title),
  });
}
