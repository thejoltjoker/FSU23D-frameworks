export interface Post {
  userId: string;
  postId: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: Comment[];
  timestamp: Date;
  location?: string;
  hashtags?: string[];
}
