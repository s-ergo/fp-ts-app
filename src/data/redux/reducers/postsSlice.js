import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        list: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});
