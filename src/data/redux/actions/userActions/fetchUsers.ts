import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "utils";

export const fetchUsers = createAsyncThunk("get/usersList", async () => await fetchData("/users"));
