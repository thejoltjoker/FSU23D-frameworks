import { Post } from "../models/Post";
import LikeButton from "./LikeButton";

type FeedPostProps = {
  data: Post;
};

const FeedPost = ({ data }: FeedPostProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">{data.username}</h3>
      <img src={data.imageUrl} alt="" className="rounded-2xl" />
      <div className="mb-2 flex justify-between font-bold">
        <LikeButton />
        <p className="text-sm">{data.likes} likes</p>
      </div>
      <p className="whitespace-pre-line">{data.caption}</p>
    </div>
  );
};

export default FeedPost;
