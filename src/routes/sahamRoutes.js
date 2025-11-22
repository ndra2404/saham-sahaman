
import express from 'express';
import { fetchHandler } from '../controllers/stockbitController.js';
import { sendTelegramHandler } from '../controllers/telegramController.js';

const router = express.Router();
router.get('/fetch', fetchHandler);
router.post('/sendTelegram', sendTelegramHandler);

export default router;
