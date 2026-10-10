import "dotenv/config";
import { defineConfig } from "prisma/config";

function buildDatabaseUrl() {
  const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

  if (!MYSQL_USER || !MYSQL_PASSWORD || !MYSQL_DATABASE) {
    throw new Error(
      "Set MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE in .env before running Prisma.",
    );
  }

  const host = process.env.MYSQL_HOST || "127.0.0.1";
  const port = process.env.MYSQL_PORT || "3307";
  const url = new URL(`mysql://${host}:${port}`);
  url.username = MYSQL_USER;
  url.password = MYSQL_PASSWORD;
  url.pathname = `/${MYSQL_DATABASE}`;

  return url.toString();
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: buildDatabaseUrl(),
  },
});
