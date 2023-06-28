import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "types";

export const fetchUsers = createAsyncThunk<User[]>("get/usersList", async () => {
    const res: AxiosResponse<User[]> = await axios.get("/users");
    return res.data;
});
