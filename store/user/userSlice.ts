import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedUsers } from "../../data/data"
import { User } from "../../data/types";

const userSlice = createSlice({
    name: "user",
    initialState: mockedUsers,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
    },
},
);

export const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;