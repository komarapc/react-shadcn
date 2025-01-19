import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/reducer/theme.reducer";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
