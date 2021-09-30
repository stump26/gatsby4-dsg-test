import React from "react";
import Post from "~/component/Post";
import { genIdenticon } from '~/utils/hashAndAvatarGenerator'

const PostTemplate = (props: any) => {
  return <Post {...props.serverData} />;
};

export default PostTemplate;

export async function getServerData(props:any) {
  try {
    const hash = props.params.id
    const identicon = genIdenticon(hash);
    return {
      props: {
        id:hash,
        identicon
      },
    };
  } catch {
    return {
      props: {
        error: 500,
      },
    };
  }
}
