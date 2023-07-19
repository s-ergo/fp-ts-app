import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "utils";

export const fetchPosts = createAsyncThunk(
    "get/postsList",
    async (userId: string) => await fetchData(`/posts?userId=${userId}`)
);
