#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const [topic, slug, source] = process.argv.slice(2);

if (!topic || !slug) {
  console.error("Использование: node scripts/new-problem.js <тема> <слаг> [источник]");
  console.error('Пример: node scripts/new-problem.js arrays two-sum "LeetCode #1"');
  process.exit(1);
}

const problemDir = join(rootDir, topic, slug);

if (existsSync(problemDir)) {
  console.error(`Папка уже существует: ${problemDir}`);
  process.exit(1);
}

const title = slug
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const readmeTemplate = readFileSync(join(rootDir, "_template", "README.md"), "utf-8");
const solutionTemplate = readFileSync(join(rootDir, "_template", "solution.js"), "utf-8");

const fillPlaceholders = (text) =>
  text
    .replaceAll("{{TITLE}}", title)
    .replaceAll("{{SOURCE}}", source || "укажи источник вручную");

mkdirSync(problemDir, { recursive: true });
writeFileSync(join(problemDir, "README.md"), fillPlaceholders(readmeTemplate));
writeFileSync(join(problemDir, "solution.js"), fillPlaceholders(solutionTemplate));

console.log(`Создано: ${problemDir}`);
