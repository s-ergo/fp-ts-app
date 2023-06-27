import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("get/postsList", async (userId) => {
    const res = await axios.get(`/posts?userId=${userId}`);
    return res.data;
});
