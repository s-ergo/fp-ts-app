import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import React, { memo } from "react";

const Controls = ({ userId, handlePosts, handleAlbums }) => {
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

Controls.propTypes = {
    userId: PropTypes.number.isRequired,
    handlePosts: PropTypes.func.isRequired,
    handleAlbums: PropTypes.func.isRequired,
};
