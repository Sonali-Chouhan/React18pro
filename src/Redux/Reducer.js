//For profile page reducer 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  User: [],
  isEdit: [],
  id:''
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    Add: (state, action) => {
      state.User.push(action.payload);
    },
    Delete: (state, action) => {
      state.User.splice(action.payload, 1);
    },
    Edit: (state, action) => {
      state.id=action.payload
      state.isEdit = state.User[action.payload];
    },
    Update: (state, action) => {
     state.User[action.payload.id]=action.payload
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  Add,
  Delete,
  Edit,
  Update,
} = counterSlice.actions;

export default counterSlice.reducer;
