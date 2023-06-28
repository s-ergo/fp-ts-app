import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { FC, memo } from "react";
import { ControlsProps } from "types";

const Controls: FC<ControlsProps> = ({ userId, handlePosts, handleAlbums }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Button variant="contained" size="small" onClick={() => handlePosts(userId)}>
                Posts
            </Button>

            <Button variant="contained" size="small" onClick={() => handleAlbums(userId)}>
                Albums
            </Button>
        </Stack>
    );
};

export default memo(Controls);
