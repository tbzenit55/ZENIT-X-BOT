import banner from "./banner.js";
import logger from "./logger.js";
import { loadPlugins } from "./loader.js";

export default async function startup(){

    banner();

    logger.info("Loading Plugins...");

    await loadPlugins();

    logger.success("System Ready.");

}
