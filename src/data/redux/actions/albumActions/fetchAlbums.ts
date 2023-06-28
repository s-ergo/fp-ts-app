import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("get/albumsList", async (userId: string) => {
    const res = await axios.get(`/albums?userId=${userId}`);
    return res.data;
});
