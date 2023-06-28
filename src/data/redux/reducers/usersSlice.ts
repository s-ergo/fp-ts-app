import { createSlice } from "@reduxjs/toolkit";
import { User } from "types";
import { fetchUsers } from "../actions";

const initialState: { userId: string, list: User[] } = {
    userId: "",
    list: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export const { setUserId } = usersSlice.actions;
