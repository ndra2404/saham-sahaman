
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export async function sendToTelegram(payload) {
    const botToken = payload.botToken;
    const chatId = payload.chatId;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        // Pecah pesan jika lebih dari 4000 karakter
        const chunks = splitMessage(payload.message, 4000);

        for (const chunk of chunks) {
            await axios.post(url, {
                chat_id: chatId,
                text: chunk,
                parse_mode: 'Markdown'
            });
        }
        return { success: true, message: `Pesan dikirim` };
    } catch (error) {
        throw new Error(`Gagal kirim ke Telegram: ${error.message}`);
    }
}
function splitMessage(text, limit) {
    const chunks = [];
    for (let i = 0; i < text.length; i += limit) {
        chunks.push(text.substring(i, i + limit));
    }
    return chunks;
}
