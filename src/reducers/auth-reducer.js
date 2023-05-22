import { createSlice } from "@reduxjs/toolkit";
import { profileThunk } from "../services/auth-thunk.js";

const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null,user:null },
    reducers: {},
    extraReducers: {
      [profileThunk.fulfilled]: (state, { payload }) => {
        state.user = payload;
      },
    },
   });

export default authSlice.reducer;