import path from "path";
import hashAndAvatarGenerator from "../utils/hashAndAvatarGenerator";

const countOfPages = 1000;

export const createPages = async ({ graphql, actions }) => {
  const posts = await hashAndAvatarGenerator(15, countOfPages);

  posts.forEach((post, idx) => {
    actions.createPage({
      path: `/post/` + post.id,
      context: post,
      component: path.resolve(__dirname, "src/template/PostTemplate.tsx"),
      // DSG (false => pre-build, true => SSR)
      defer: idx + 1 > countOfPages / 10,
    });
  });
};
