
import axios from 'axios';
import { db } from '../config/db.js';

export async function postStockbitTemplates(payload) {
    // Ambil token dari DB
    const [rows] = await db.execute('SELECT token FROM api_tokens WHERE id = ?', [payload.id]);
    if (rows.length === 0) throw new Error('Token tidak ditemukan di database');
    const bearerToken = rows[0].token;

    // POST ke API Stockbit
    const url = 'https://exodus.stockbit.com/screener/templates';
    const response = await axios.post(url, payload.data, {
        headers: {
            Authorization: bearerToken,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}
