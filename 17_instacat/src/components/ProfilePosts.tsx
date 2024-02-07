import { Post } from "../models/Post";

type ProfilePostsProps = {
  posts: Post[] | undefined;
};

const ProfilePosts = ({ posts }: ProfilePostsProps) => {
  return (
    <>
      {posts ? (
        <div className="grid grid-cols-3 gap-2">
          {posts?.map((post) => {
            return (
              <div>
                <img src={post.imageUrl} alt="" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {Array(9)
            .fill("")
            .map(() => {
              return (
                <div>
                  <div className="aspect-square w-full animate-pulse bg-gray-200"></div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default ProfilePosts;
