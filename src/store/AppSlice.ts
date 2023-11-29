import {
  // createSelector,
  createSlice,
  // current,
  // PayloadAction,
} from "@reduxjs/toolkit";
// import { RootState } from ".";

interface AppProps {
  shoppingListItems: string[];
}

const initialState: AppProps = {
  shoppingListItems: [],
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default AppSlice;
