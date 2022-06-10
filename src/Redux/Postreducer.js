// for about reducer and call fake api
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url="https://jsonplaceholder.typicode.com/posts"
export const getPost=createAsyncThunk("posts/getPost",async ()=>{
    return fetch(url).then((res)=>res.json())
      
})
const postSlice=createSlice({

    name:"posts",
    initialState:{
        Posts:[],
        loading:false
    },
    extraReducers:{
        [getPost.pending]:(state,action)=>{
            state.loading=true
        },
        [getPost.fulfilled]:(state,action)=>{
            state.loading=false
            console.log("data",action.payload)
            state.Posts=action.payload

        },
        [getPost.rejected]:(state,action)=>{
            state.loading=false

        }

    }
})
export default postSlice.reducer;