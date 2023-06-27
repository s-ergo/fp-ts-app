import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        userId: "",
        list: [],
    },
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
