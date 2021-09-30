import path from "path";
import { hashAndAvatarGenerator } from "./hashAndAvatarGenerator";

const countOfPages = 1000;

export const createPages = async ({ graphql, actions }:any) => {
  const posts = hashAndAvatarGenerator(15, countOfPages);

  posts.forEach((post:any, idx:number) => {
    actions.createPage({
      path: `/posts/` + post.id,
      context: post,
      component: path.resolve(__dirname, "src/template/PostTemplate.tsx"),
      // DSG (false => pre-build, true => SSR)
      defer: idx + 1 > (countOfPages / 10),
    });
  });
};
