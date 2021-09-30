import React from "react";
import Post from "~/component/Post";

import type { PageProps } from 'gatsby/index'
import type { PostProps }  from "~/component/Post";

interface postProps extends PageProps {
  pageContext: PostProps
}

const PostTemplate: React.FC<postProps> = (props) => {
  return <Post {...props.pageContext} />;
};

export default PostTemplate;
