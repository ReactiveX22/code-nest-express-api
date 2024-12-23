import express from 'express';
import config from './src/config/default.js';
import postRoutes from './src/routes/postRoutes.js';
import checkDbConnection from './src/utils/dbCheck.js';

const app = express();
const port = config.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Welcome to CodeNest API ⚡');
});

app.use('/api/posts', postRoutes);

await checkDbConnection();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
