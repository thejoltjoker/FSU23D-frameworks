export class Post {
  constructor(
    public id: string,
    public title: string,
    public hashtags: string[],
    public author: string,
    public date: Date
  ) {}
}
