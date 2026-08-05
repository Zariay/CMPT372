import express from "express";

const app = express();
const PORT = 3000;

app.get("/app", (_req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Assignment 3 Express App</title>
        </head>
        <body>
            <h1>CMPT 372 Assignment 3</h1>
            <p>This page is being served by the Express application.</p>
        </body>
        </html>
    `);
});

app.get("/app/info", (req, res) => {
    res.json({
        ip: req.ip,
        protocol: req.protocol,
        hostname: req.hostname,
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Express server running at http://127.0.0.1:${PORT}`);
});