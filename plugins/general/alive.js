export default {

    name: "alive",

    description: "Bot Status",

    async execute(sock, msg){

        await sock.sendMessage(msg.key.remoteJid,{

            text:"✅ ZENIT X BOT is Running."

        });

    }

}
