import express from "express";
import path from "path";
import GiftsController from '../controllers/gifts.js';
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const router = express.Router();

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

  router.get('*', (req, res) => {
    res.status(404).send("Error 404 not found");
});



export default router;
