import { useUserContext } from "../contexts/UserContext";

type Props = {
  name: string;
  onNameChange: (name: string) => void;
  bio: string;
  onBioChange: (text: string) => void;
};

const EditProfileSection = (props: Props) => {
  const { user } = useUserContext();

  return (
    <div className="mb-8 flex  flex-col gap-4">
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="username" className="font-bold">
          Username:
        </label>
        <input
          type="text"
          name="username"
          className="rounded-md border-gray-400 disabled:bg-gray-100 disabled:text-gray-500"
          value={user?.username}
          disabled
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="rounded-md border-gray-400"
          value={props.name}
          onChange={(e) => props.onNameChange(e.target.value)}
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <label htmlFor="name" className="font-bold">
          Bio:
        </label>
        <textarea
          name="name"
          className="rounded-md border-gray-400"
          value={props.bio}
          onChange={(e) => props.onBioChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EditProfileSection;
