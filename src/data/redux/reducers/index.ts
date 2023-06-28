import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { albumsSlice } from "./albumsSlice";
import { postsSlice } from "./postsSlice";
import { usersSlice } from "./usersSlice";

const reducer = combineReducers({
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    albums: albumsSlice.reducer,
});

export const store = configureStore({ reducer });
