import React from "react";
import Post from "~/component/Post";

interface postProps {
  location: object;
  navigate: Function;
  pageContext: {
    id: string;
    identicon: string;
  };
  pageResources: object;
  params: object;
  path: string;
  uri: string;
  key?: any;
}

const PostTemplate: React.FC<postProps> = (props) => {
  return <Post {...props.pageContext} />;
};

export default PostTemplate;
