import { getPosts } from "./getPosts";
import { getUsers } from "./getUsers";

export const getUsersPosts = async () => {
  const posts = await getPosts();
  const users = await getUsers();

  posts.forEach((post) => {
    const findUser = users.find((user) => user.id === post.userId).name;
    post.name = findUser;
  });

  return posts;
};


