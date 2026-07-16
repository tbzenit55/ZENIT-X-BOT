import config from "../config.js";

export default function banner() {
console.clear();

console.log(`
╔══════════════════════════════════════════════╗
║                                              ║
║              Z E N I T  X  B O T            ║
║                                              ║
╠══════════════════════════════════════════════╣
║ Owner   : ${config.OWNER_NAME}
║ Bot     : ${config.BOT_NAME}
║ Version : ${config.VERSION}
║ Mode    : ${config.MODE}
║ Prefix  : ${config.PREFIX}
║ Port    : ${config.PORT}
╚══════════════════════════════════════════════╝

🚀 Starting WhatsApp Multi Device...
`);
}
