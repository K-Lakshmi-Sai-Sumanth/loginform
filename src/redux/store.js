import { configureStore } from "@reduxjs/toolkit";
import emailslice from "./emailslice";
export const store=configureStore({
    reducer:{
        email:emailslice
    }
})