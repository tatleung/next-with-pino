import logLevelData from "../log-level";
import pino, { Logger } from "pino";

const logLevels = new Map<string, string>(Object.entries(logLevelData));

export function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get("*") || "info";
}

export function getLogger(name: string): Logger {
  return pino({ name, level: getLogLevel(name) });
}
