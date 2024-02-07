import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../models/Post";
import { PostsResponse } from "../models/PostsResponse";
import FeedPost from "../components/FeedPost";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    if (posts) return;
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>("/api/posts.json");
        if (!ignore) {
          setPosts(response.data.result);
        }
      } catch (error) {
        console.error("Error while fetching posts");
        throw error;
      }
    };
    fetchPosts();

    return () => {
      ignore = true;
    };
  });
  return (
    <div className="flex flex-col gap-16">
      <h1 className="pt-4 text-center text-2xl font-bold">InstaCat</h1>
      {posts &&
        posts?.map((post) => <FeedPost key={post.postId} data={post} />)}
    </div>
  );
};

export default HomePage;
