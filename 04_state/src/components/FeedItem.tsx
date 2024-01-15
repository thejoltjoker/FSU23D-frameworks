import { Post } from "../models/Post";
import { formatDistanceToNow } from "date-fns";
type Props = {
  post: Post;
};

const FeedItem: React.FC<Props> = ({ post }) => {
  return (
    <div className="text-start p-4 bg-white rounded-lg">
      <p className="pb-2 font-bold text-sky-800">@{post.author}</p>
      <p className="text-lg pb-2">{post.body}</p>

      <div className="inline-flex items-center w-full text-sm justify-between">
        <ul className="text-sky-400 inline-flex gap-2">
          {post.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <p className="text-slate-400 text-sm">
          {formatDistanceToNow(post.date)} ago
        </p>
      </div>
    </div>
  );
};

export default FeedItem;
