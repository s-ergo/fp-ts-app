import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("get/albumsList", async (userId) => {
    const res = await axios.get(`/albums?userId=${userId}`);
    return res.data;
});
