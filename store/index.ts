import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "reducers/counter";
import userReducer from "reducers/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
