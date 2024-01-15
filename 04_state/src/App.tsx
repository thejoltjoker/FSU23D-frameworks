import "./App.css";
import CreatePost from "./components/CreatePost";
import PostsFeed from "./components/PostsFeed";
import { posts } from "./data/posts";

function App() {
  return (
    <div className="max-w-screen-md mx-auto">
      <CreatePost />
      <PostsFeed posts={posts} />
    </div>
  );
}

export default App;
