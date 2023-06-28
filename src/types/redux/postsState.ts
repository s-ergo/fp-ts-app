export type Post = {
    body: string;
    id: number;
    title: string;
    userId: number;
  };

export interface PostsState {
    list: Post[];
}
