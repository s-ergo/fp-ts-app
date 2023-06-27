import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("get/usersList", async () => {
    const res = await axios.get("/users");
    return res.data;
});
