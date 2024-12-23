import db from '../db/knex.js';

export const createPost = async (postData) => {
  const newPost = db('posts').insert(postData).returning('*');
  return newPost;
};
