import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'codenest',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'codenest',
      port: process.env.DB_PORT || 5432,
    },
  },
};

export default config;
