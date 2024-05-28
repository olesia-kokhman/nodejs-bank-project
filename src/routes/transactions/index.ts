import express from 'express';
import {getAllTransactions} from "../../controllers/transactions";

const router = express.Router();
router.get('/transactions', getAllTransactions);


export default router;