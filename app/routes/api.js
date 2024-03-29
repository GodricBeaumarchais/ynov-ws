import express from 'express';
import { createTable, deleteTable } from '../models/tableModel.js';


const router = express.Router();

// Route pour créer une table
router.post('/table/create/:tableName', async (req, res) => {
    await createTable(req.params.tableName);
    res.send(`Table ${req.params.tableName} created.`);
});

// Route pour supprimer une table
router.post('/table/delete/:tableName', async (req, res) => {
    await deleteTable(req.params.tableName);
    res.send(`Table ${req.params.tableName} deleted.`);
});

export default router;
