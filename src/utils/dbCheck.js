import db from '../db/knex.js';

const checkDbConnection = async () => {
  try {
    await db.raw('SELECT 1');
    console.log('Database connection established successfully.');
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
};

export default checkDbConnection;
