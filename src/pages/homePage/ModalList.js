import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import React, { memo } from "react";
import ItemsList from "../../components/ItemsList";

const ModalList = ({ open, setOpen, albums }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <ItemsList items={albums} action="albums" />
            </DialogContent>
        </Dialog>
    );
};

export default memo(ModalList);

ModalList.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    albums: PropTypes.array.isRequired,
};
