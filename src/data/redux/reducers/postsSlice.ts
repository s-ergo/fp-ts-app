import { createSlice } from "@reduxjs/toolkit";
import { Post } from "types";
import { fetchPosts } from "../actions";

const initialState: { list: Post[] } = {
    list: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});
