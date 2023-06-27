import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbums } from "../actions";

export const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        list: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});
