const fs = require("fs");
const path = require("path");

const backendRoot = path.resolve(__dirname, "../..");

const parseEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) return;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (!key || process.env[key] !== undefined) return;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
};

const loadEnv = () => {
  parseEnvFile(path.join(backendRoot, ".env"));
  if (process.env.NODE_ENV !== "production") {
    parseEnvFile(path.join(backendRoot, ".env.development"));
    parseEnvFile(path.join(backendRoot, ".env.local"));
  }
};

loadEnv();

module.exports = { loadEnv };
