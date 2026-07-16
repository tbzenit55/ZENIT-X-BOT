require("dotenv").config();

module.exports = {
    bot: {
        name: process.env.BOT_NAME || "ZENIT X MINI",
        prefix: process.env.PREFIX || ".",
        mode: process.env.MODE || "public"
    },

    owner: {
        number: process.env.OWNER_NUMBER || ""
    },

    server: {
        port: Number(process.env.PORT) || 3000
    },

    session: {
        path: process.env.SESSION_DIR || "./session"
    }
};
