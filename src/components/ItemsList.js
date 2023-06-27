import { List, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import React, { memo } from "react";
import Controls from "./Controls";

const ItemsList = ({ items, action, handlePosts, handleAlbums }) => {
    const actionObj = {
        users: ["name", "email"],
        posts: ["title", "body"],
        albums: ["title", ""],
    };

    return (
        <List>
            {items?.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", mt: 2 }}
                >
                    <ListItemText primary={item[actionObj[action][0]]} secondary={item[actionObj[action][1]]} />

                    {action === "users" && (
                        <Controls handlePosts={handlePosts} handleAlbums={handleAlbums} userId={item.id} />
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default memo(ItemsList);

ItemsList.propTypes = {
    action: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    handlePosts: PropTypes.func,
    handleAlbums: PropTypes.func,
};
