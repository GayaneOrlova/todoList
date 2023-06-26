import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generateRandomID from "../utils/generateRandomID";


export type Item = {
  value: string;
  id: string;
  checked: boolean;
};

type ItemState = {
  toDoList: Item[];
  filter: string;
};

const initialState: ItemState = {
  toDoList: [],
  filter: "all",
};


export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      if (!action.payload.trim()) {
        return;
      }
      const newListItem = {
        value: action.payload,
        id: generateRandomID(),
        checked: false,
      };
      state.toDoList.push(newListItem);
    },

    onTodoItemChecked: (state, action: PayloadAction<string>) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return { ...item, checked: !item.checked };
      });
    },

    onTodoItemRemove: (state, action: PayloadAction<string>) => {
      state.toDoList = state.toDoList.filter((item) => item.id !== action.payload
      );
    },

    onClearComplited: (state) => {
      state.toDoList = state.toDoList.filter((item) => !item.checked);
    },

    onToogleCheck: (state) => {
      const isCheckedItem = Boolean(state.toDoList.find((item) => !item.checked));
      state.toDoList = state.toDoList.map((item) => {
        return { ...item, checked: isCheckedItem };
      });
    },

    onChangeValue: (state, action: PayloadAction<{id: string; value: string}>) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return { ...item, value: action.payload.value };
      });
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addItem,
  onTodoItemChecked,
  onTodoItemRemove,
  onClearComplited,
  onToogleCheck,
  onChangeValue,
  setFilter,
} = todoSlice.actions;


export default todoSlice.reducer;
