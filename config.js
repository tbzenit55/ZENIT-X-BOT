import dotenv from "dotenv";

dotenv.config();

const config = {
  BOT_NAME: process.env.BOT_NAME || "ZENIT X BOT",
  OWNER_NAME: process.env.OWNER_NAME || "ZENIT",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "",
  PREFIX: process.env.PREFIX || ".",
  MODE: process.env.MODE || "public",
  PORT: process.env.PORT || 3000,
  VERSION: "1.0.0"
};

export default config;
