import { List, ListItem, ListItemText } from "@mui/material";
import React, { FC, memo } from "react";
import { ItemListProps } from "types";
import Controls from "./Controls";

const ItemsList: FC<ItemListProps> = ({ items, action, handlePosts, handleAlbums }) => {
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
