import axios from "axios";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import { formatNumber } from "../helpers/numbers";
import { Post } from "../models/Post";
import { PostsResponse } from "../models/PostsResponse";
import EditProfileSection from "../components/EditProfileSection";
import ProfilePosts from "../components/ProfilePosts";
import ProfilePicture from "../components/ProfilePicture";
import { UserActionType } from "../reducers/UserReducer";

const ProfilePage = () => {
  const { user, dispatch } = useUserContext();
  const [posts, setPosts] = useState<Post[]>();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState<string>(user?.fullName ?? "");
  const [bio, setBio] = useState<string>(user?.bio ?? "");
  const handleSave = () => {
    setEditable(false);
    if (user) {
      dispatch({
        type: UserActionType.UPDATE,
        payload: { ...user, fullName: name, bio: bio },
      });
    }
  };
  useEffect(() => {
    if (posts) return;
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostsResponse>("/api/posts.json");
        if (!ignore) {
          setPosts(
            response.data.result.filter(
              (post) => post.username == user?.username,
            ),
          );
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
    <div className="py-4">
      <div className="mb-4 flex items-center gap-4">
        <ProfilePicture user={user} />
        <div className="w-full">
          <div className="mb-2 flex w-full justify-around gap-4">
            <div className="text-center">
              <p className="font-bold">{posts?.length ?? 0}</p>
              <p className="text-gray-500">posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold">
                {user && formatNumber(user.followers)}
              </p>
              <p className="text-gray-500">followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">
                {user && formatNumber(user.following)}
              </p>
              <p className="text-gray-500">following</p>
            </div>
          </div>

          {editable ? (
            <button
              className="w-full rounded-md border border-sky-500 bg-sky-500 p-1.5 font-bold text-white"
              onClick={handleSave}
            >
              Save profile
            </button>
          ) : (
            <button
              className="w-full rounded-md border border-gray-300 p-1.5"
              onClick={() => setEditable(!editable)}
            >
              Edit profile
            </button>
          )}
        </div>
      </div>
      {editable && (
        <EditProfileSection
          name={name}
          onNameChange={setName}
          bio={bio}
          onBioChange={setBio}
        />
      )}
      {!editable && (
        <div className="mb-4">
          <h2 className="font-bold">{user?.username}</h2>
          <p className="text-gray-400">{user?.role}</p>
          <p className="whitespace-pre-line">{user?.bio}</p>
        </div>
      )}
      <ProfilePosts posts={posts} />
    </div>
  );
};

export default ProfilePage;
