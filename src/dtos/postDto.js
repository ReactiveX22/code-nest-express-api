export const createPostDto = (postData) => {
  return {
    author_id: postData.author_id,
    title: postData.title,
    content: postData.content,
  };
};

export const getPostDto = (post) => {
  return {
    id: post.id,
    author_id: post.author_id,
    title: post.title,
    content: post.content,
    created_at: post.created_at,
    updated_at: post.updated_at,
  };
};
