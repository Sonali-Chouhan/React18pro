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
export const userList = createAsyncThunk("post/userList", async (data) => {
  return await instance.get("/posts").then((res) => {
     return res.data;
    
  });
});
export const userDelete = createAsyncThunk("post/userDelete", async (id) => {
  return await instance.delete(`/posts/${id}`).then((res) => {
     return res.data;
    
  });
});
export const userEdit = createAsyncThunk("post/userEdit", async (id) => {
  return await instance.get(`/posts/${id}`).then((res) => {
     return res.data;
    
  });
});
export const userUpdate = createAsyncThunk("post/userUpdate", async (data) => {
  return await instance.put(`/posts/${data.id}`,{ post: data }).then((res) => {
     return res.data;
    
  });
});


const dataSlice = createSlice({
  name: "post",
  initialState: {
    Regi: [],
    Logi: [],
    Create: [],
    PostList:[],
    Delete:'',
    Edit:[],
    Update:[],

    loading: false,
  },
  extraReducers: {
    [getRegi.pending]: (state, action) => {
      state.loading = true;
    },
    [getRegi.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("Token1", action.payload.token);
      state.Regi = action.payload;
    },
    [getIn.fulfilled]: (state, action) => {
      localStorage.setItem("Token", action.payload.token);
      const id = action.payload.user.id;
      localStorage.setItem("User_Id", id);
      state.Logi = action.payload;
    },
    [userCreate.fulfilled]: (state, action) => {
      state.Create = action.payload.message;
    },
    [userList.fulfilled]:(state,action)=>{
    
      state.PostList=action.payload

    },
    [userEdit.fulfilled]:(state,action)=>{
     
      state.Edit=action.payload

    },
    [userDelete.fulfilled]:(state,action)=>{
      
      
      state.delete=action.payload.message

    },
    [userUpdate.fulfilled]:(state,action)=>{
      
     state.Update=action.payload

     },
    [getRegi.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default dataSlice.reducer;
