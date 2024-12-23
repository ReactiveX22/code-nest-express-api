import { createPost } from '../dao/postDao.js';
import { createPostDto } from '../dtos/postDto.js';

export const createPostHandler = async (req, res) => {
  try {
    const postData = createPostDto(req.body);
    const newPost = await createPost(postData);

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating post' });
  }
};
