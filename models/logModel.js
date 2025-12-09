const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

const createLog = async (logData) => {
    const [id] = await db('logs').insert(logData);
    return db('logs').where({ id }).first();
};

const getLogByHash = async (hash) => {
    return db('logs').where({ hash }).first();
};

const getAllLogs = async () => {
    return db('logs')
        .select(
            'id',
            'filename',
            'original_size',
            'severity',
            'from_cache',
            'created_at'
        )
        .orderBy('created_at', 'desc');
};



const getLogById = async (id) => {
    return db('logs').where({ id }).first();
};

module.exports = { createLog, getLogByHash, getAllLogs, getLogById };
