// for about reducer and call fake api
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../BaseUrl/Base";

export const getRegi = createAsyncThunk("post/getRegi", async (data) => {
  return await instance.post("/signup", { user: data }).then((res) => {
    return res.data;
  });
});
export const getIn = createAsyncThunk("post/getIn", async (data) => {
  return await instance.post("/signin", { user: data }).then((res) => {
    return res.data;
  });
});
export const userCreate = createAsyncThunk("post/userCreate", async (data) => {
  return await instance.post("/posts", { post: data }).then((res) => {
    return res.data;
  });
});

const dataSlice = createSlice({
  name: "post",
  initialState: {
    Regi: [],
    Logi: [],
    User: [],

    loading: false,
  },
  extraReducers: {
    [getRegi.pending]: (state, action) => {
      state.loading = true;
    },
    [getRegi.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("Token", action.payload.token);
      state.Regi = action.payload;
    },
    [getIn.fulfilled]: (state, action) => {
      localStorage.setItem("Token", action.payload.token);
      state.Logi = action.payload;
    },
    [userCreate.fulfilled]: (state, action) => {
      state.User = action.payload;
    },
    [getRegi.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default dataSlice.reducer;
