import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListItemType {
  value: string;
  checked: boolean;
}

interface AppProps {
  shoppingListItems: ListItemType[];
}

const initialState: AppProps = {
  shoppingListItems: [],
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addListItem: (state, action: PayloadAction<string>) => {
      state.shoppingListItems.push({ value: action.payload, checked: false });
    },
    removeListItem: (state, action: PayloadAction<number>) => {
      state.shoppingListItems = [
        ...state.shoppingListItems.slice(0, action.payload),
        ...state.shoppingListItems.slice(action.payload + 1),
      ];
    },
    toggleListItem: (state, action: PayloadAction<number>) => {
      state.shoppingListItems = [
        ...state.shoppingListItems.slice(0, action.payload),
        {
          ...state.shoppingListItems[action.payload],
          checked: !state.shoppingListItems[action.payload].checked,
        },
        ...state.shoppingListItems.slice(action.payload + 1),
      ];
    },
  },
});

export const { addListItem, removeListItem, toggleListItem } = AppSlice.actions;

export default AppSlice;
