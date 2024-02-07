export interface Post {
  postId: string;
  imageUrl: string;
  username: string;
  caption: string;
  date: string;
  likes: number;
  comments: Comment[];
}


