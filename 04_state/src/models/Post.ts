export class Post {
  constructor(
    public body: string,
    public tags: string[],
    public author: string,
    public date: Date
  ) {}
}
