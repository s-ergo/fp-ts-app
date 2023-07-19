import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "utils";

export const fetchAlbums = createAsyncThunk(
    "get/albumsList",
    async (userId: string) => await fetchData(`albums?userId=${userId}`)
);
