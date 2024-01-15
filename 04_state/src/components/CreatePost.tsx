import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../models/Post";

type Props = {};

const CreatePost = (props: Props) => {
  const [post, setPost] = useState<Post>(new Post("", [], "", new Date()));

  const extractTags = (text: string): string[] => {
    const matches = text.match(/#[\w\p{L}]+/giu);
    return matches ?? [];
  };
  const handleOnBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Extract tags
    const tags = extractTags(e.target.value);
    setPost({ ...post, body: e.target.value, tags: tags });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white rounded-lg">
      <form className="flex p-5 gap-4 flex-col">
        <div className="flex gap-4">
          <input
            type="text"
            name="body"
            className="bg-slate-100 grow rounded-lg border-slate-300"
            value={post.body}
            onChange={handleOnBodyChange}
          />
          <button
            className="bg-sky-500 text-white font-bold px-4 py-2 rounded-lg border border-sky-600"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h5>Tags:</h5>
          <ul className=" text-sky-500 inline-flex gap-2">
            {post.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
