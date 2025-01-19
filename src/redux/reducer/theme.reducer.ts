import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Theme = "light" | "dark" | "system";
interface InitialState {
  theme: Theme;
}
const initialState: InitialState = {
  theme: "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }: { payload: Theme }) => {
      state.theme = payload;
    },
  },
});
export const { setTheme } = themeSlice.actions;
export const useSelectTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
