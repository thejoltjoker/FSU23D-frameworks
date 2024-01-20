import { useEffect, useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostsFeed from "./components/PostsFeed";
import { Post } from "./models/Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("posts.json")
      .then((response) => response.json())
      .then((json) => setPosts(json.posts));
  }, []);

  return (
    <div className="max-w-screen-md mx-auto">
      <CreatePost />
      <PostsFeed posts={posts} />
    </div>
  );
}

export default App;


