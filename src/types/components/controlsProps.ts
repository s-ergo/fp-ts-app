export interface ControlsProps {
    userId: number;
    handlePosts: (userId: number) => void;
    handleAlbums: (userId: number) => void;
}
