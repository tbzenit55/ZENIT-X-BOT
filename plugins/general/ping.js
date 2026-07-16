export default {
    name: "ping",
    description: "Bot Ping",

    async execute(sock, msg) {

        await sock.sendMessage(msg.key.remoteJid, {

            text: "🏓 Pong!"

        });

    }

}
