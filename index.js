```javascript
require("dotenv").config();

const express = require("express");
const config = require("./config");

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("web/public"));

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${config.bot.name}</title>
            <style>
                body{
                    background:#0f172a;
                    color:white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    font-family:Arial;
                }
                h1{
                    color:#00d4ff;
                }
            </style>
        </head>
        <body>
            <div>
                <h1>${config.bot.name}</h1>
                <h3>Website Running Successfully</h3>
            </div>
        </body>
        </html>
    `);
});

// Start Server
app.listen(config.server.port, () => {
    console.clear();

    console.log("========================================");
    console.log("        ZENIT X MINI");
    console.log("========================================");
    console.log("Server Started Successfully");
    console.log("Port :", config.server.port);
    console.log("Mode :", config.bot.mode);
    console.log("========================================");
});
```
