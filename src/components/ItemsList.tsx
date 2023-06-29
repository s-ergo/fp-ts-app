import { List, ListItem, ListItemText } from "@mui/material";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import React, { FC, memo } from "react";
import { Album, ItemListProps, User } from "types";
import Controls from "./Controls";

const ItemsList: FC<ItemListProps> = ({ items, action, handlePosts, handleAlbums }) => {
    const actionObj = {
        users: ["name", "email"],
        posts: ["title", "body"],
        albums: ["title", ""],
    };

    return (
        <List>
            {
                pipe(
                    items,
                    A.map((item: User | Album) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                mt: 2,
                            }}
                        >
                            <ListItemText
                                primary={item[actionObj[action][0]]}
                                secondary={item[actionObj[action][1]]}
                            />

                            {action === "users" && (
                                <Controls
                                    handlePosts={handlePosts}
                                    handleAlbums={handleAlbums}
                                    userId={item.id}
                                />
                            )}
                        </ListItem>
                    ))
                )
            }
        </List>
    );
};

export default memo(ItemsList);
