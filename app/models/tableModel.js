import { query } from '../db/index.js';

const createTable = async (tableName) => {
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
    id SERIAL PRIMARY KEY,
    data TEXT NOT NULL
    );`;
    await query(sql);
};

const deleteTable = async (tableName) => {
    const sql = `DROP TABLE IF EXISTS ${tableName};`;
    await query(sql);
};


export {
    createTable,
    deleteTable
};
