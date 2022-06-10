//for Home page reducer
import { createReducer } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialSate={
    name:'hello',
    age:30,
    data:"data-1"
}
export default createReducer(initialSate,(builder)=>{
    builder.addCase("Update_name",(state,action)=>{
        state.name=action.payload
    })
    builder.addCase("Update_Age",(state,action)=>{
        state.age=action.payload
    })
    builder.addCase("Update_Data",(state,action)=>{
        state.data=action.payload
    })
})