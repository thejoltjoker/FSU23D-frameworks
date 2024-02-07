import { User } from "../models/User";

type ProfilePicture = { user: User | undefined };

const ProfilePicture = ({ user }: ProfilePicture) => {
  return (
    <div className="max-w-32">
      <img
        src={user?.profilePictureUrl ?? "https://placekitten.com/400/400"}
        alt="Profile picture"
        className="rounded-full border-2 border-white outline outline-1 outline-gray-300"
      />
    </div>
  );
};

export default ProfilePicture;
