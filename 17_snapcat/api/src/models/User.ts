export interface User {
  userId: string;
  username: string;
  fullName: string;
  bio?: string;
  profilePictureUrl?: string;
  followers: number;
  following: number;
}
