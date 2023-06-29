import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { flow } from "fp-ts/function";
import React, { FC, memo } from "react";
import { ModalListProps } from "types";
import ItemsList from "../../components/ItemsList";

const ModalList: FC<ModalListProps> = ({ open, setOpen, albums }) => {
    const handleClose = flow(() => false, setOpen);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <ItemsList items={albums} action="albums" />
            </DialogContent>
        </Dialog>
    );
};

export default memo(ModalList);
