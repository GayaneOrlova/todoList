import { createSlice } from "@reduxjs/toolkit";
import generateRandomID from "../utils/generateRandomID";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    toDoList: [],
    filter: "all",
  },
  
  reducers: {
    addItem: (state, action) => {
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
    
    onTodoItemChecked: (state, action) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id !== action.payload) {
          return item;
        } return { ...item, checked: !item.checked };
      })
    },
    
   onTodoItemRemove: (state, action) => {
      state.toDoList = state.toDoList.filter((item) => item.id !== action.payload);
    },
    
    //надо проверить
    onClearComplited: (state) => {
      state.toDoList = state.toDoList.filter((item) => !item.checked);
    },
  
    onToogleCheck: (state) => {
      const isCheckedItem = state.toDoList.find((item) => !item.checked);
      state.toDoList = state.toDoList.map((item) => {
        return { ...item, checked: isCheckedItem }
      })
    },
    
    onChangeValue: (state, action) => {
      state.toDoList = state.toDoList.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return { ...item, value: action.payload };
      })

    }
  
  },
});

export const {
  addItem,
  onTodoItemChecked,
  onTodoItemRemove,
  onClearComplited,
  onToogleCheck,
  onChangeValue
} = todoSlice.actions;

export default todoSlice.reducer;
