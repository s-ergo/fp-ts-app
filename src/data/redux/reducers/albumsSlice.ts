import { createSlice } from "@reduxjs/toolkit";
import { Album } from "types";
import { fetchAlbums } from "../actions";

const initialState: { list: Album[] } = {
    list: [],
};

export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});
