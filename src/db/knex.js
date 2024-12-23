import knex from 'knex';
import config from '../config/default.js';

const db = knex(config.db);

export default db;
