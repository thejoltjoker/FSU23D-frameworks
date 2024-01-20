export class Post {
  constructor(
    public id: string,
    public body: string,
    public hashtags: string[],
    public author: string,
    public date: Date
  ) {}
}
