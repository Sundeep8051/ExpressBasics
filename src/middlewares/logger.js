import fs from "node:fs";

const loggerMw = (req, res, next) => {
  const log = `[${Date.now()}]: ${req.method} - Path: ${req.path}\n`;
  fs.appendFileSync("src/logs.txt", log, "utf-8");
  next();
};

export default loggerMw;
