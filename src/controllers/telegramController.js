
import { db } from '../config/db.js';
import { sendToTelegram } from '../services/telegramService.js';

export async function sendTelegramHandler(req, res) {
    try {
        const [rows] = await db.execute('SELECT token FROM api_tokens WHERE id = ?', [14]);
        if (rows.length === 0) throw new Error('Token tidak ditemukan di database');
        const bearerToken = rows[0].token;
        const payload = {
            botToken: bearerToken,
            chatId:"-1002813133429",
            message: req.body.message || 'Pesan default dari server'
        };
        const result = await sendToTelegram(payload);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
