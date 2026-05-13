/**
 * EXCODE Portfolio V3 — System Status Configuration
 * This file powers the 'System Status' board and global telemetry components.
 */

export const systemStatus = {
  core: {
    label: "Portfolio Core",
    status: "stable", // stable | active | experimental | operational
    version: "3.0.0-evolution",
    uptime: "99.9%"
  },
  infrastructure: {
    label: "Modal System",
    status: "active",
    load: "optimized"
  },
  ai: {
    label: "AI Utilities",
    status: "experimental",
    engine: "OpenRouter"
  },
  discord: {
    label: "Discord Systems",
    status: "operational",
    throughput: "high"
  }
};

export const globalMetrics = [
  { label: "System Modules", value: "18+", color: "var(--color-primary)" },
  { label: "Technical Domains", value: "6", color: "var(--color-secondary)" },
  { label: "Architecture Nodes", value: "42", color: "var(--color-accent)" },
  { label: "Build Phase", value: "Evolution", color: "#fff" }
];
