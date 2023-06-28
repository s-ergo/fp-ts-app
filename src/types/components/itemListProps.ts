import { Album, User } from 'types';

export interface ItemListProps {
    action: string;
    items: Album[] | User[];
    handlePosts?: (userId: number | string) => void;
    handleAlbums?: (userId: number | string) => void;
}
