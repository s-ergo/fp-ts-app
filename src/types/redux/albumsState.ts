export type Album = {
  userId: number;
  id: number;
  title: string;
};

export interface AlbumsState {
  list: Album[];
}
