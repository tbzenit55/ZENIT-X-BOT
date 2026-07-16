import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import logger from "./logger.js";

const plugins = new Map();

export async function loadPlugins() {
    const pluginDir = "./plugins";

    if (!fs.existsSync(pluginDir)) {
        logger.warn("Plugins folder not found.");
        return;
    }

    const folders = fs.readdirSync(pluginDir);

    for (const folder of folders) {

        const folderPath = path.join(pluginDir, folder);

        if (!fs.statSync(folderPath).isDirectory()) continue;

        const files = fs.readdirSync(folderPath);

        for (const file of files) {

            if (!file.endsWith(".js")) continue;

            try {

                const plugin = await import(
                    pathToFileURL(path.join(folderPath, file))
                );

                plugins.set(file, plugin.default);

                logger.success(`Loaded Plugin : ${file}`);

            } catch (err) {

                logger.error(`Failed : ${file}`);

                console.log(err);

            }

        }

    }

}

export default plugins;
