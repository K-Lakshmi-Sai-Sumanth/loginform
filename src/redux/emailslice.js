import { createSlice } from "@reduxjs/toolkit";

const initialState={
    emailValue:"",
}

const emailSlice= createSlice({
    name:"email",
    initialState,
    reducers:{
        getEmail:(store, action)=>{
            store.emailValue = action.payload
        }
    }
})



export const { getEmail } = emailSlice.actions

export default emailSlice.reducer;