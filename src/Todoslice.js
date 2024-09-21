import { createSlice } from "@reduxjs/toolkit";

const ToduSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({
                id:Math.random(),
                text:action.payload
            })
        },
        deletetodo:(state,action)=>{
            return state.filter((val)=>val.id !==action.payload)

        }
    }
})
export const {addTodo,deletetodo}=ToduSlice.actions
export default ToduSlice.reducer 