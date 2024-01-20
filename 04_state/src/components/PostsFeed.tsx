import { Post } from "../models/Post";
import FeedItem from "./FeedItem";

type Props = {
  posts: Post[];
};

const PostsFeed = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      {props.posts.map((post) => {
        console.log(post);
        return <FeedItem post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsFeed;
