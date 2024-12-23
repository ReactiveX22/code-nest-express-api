import express from 'express';
import { createPostHandler } from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPostHandler);

export default router;
