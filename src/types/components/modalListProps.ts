import { Album } from 'types';

export interface ModalListProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    albums: Album[];
}
