import banner from "./banner.js";
import logger from "./logger.js";

export default function startup() {
    banner();

    logger.success("ZENIT X BOT Booting...");
    logger.info("Loading Core System...");
    logger.info("Loading Plugins...");
    logger.info("Loading Configuration...");
    logger.success("Core Loaded Successfully.");
}
