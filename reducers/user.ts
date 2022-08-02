import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

export type UserState = {
  isLogin: boolean;
  token: string | null;
};

const initialState: UserState = {
  isLogin: false,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state: UserState, action: PayloadAction<string>) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logOut: (state: UserState) => {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.isLogin;
export default userSlice.reducer;
