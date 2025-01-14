
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./authSlice";
import serviceReducer from "./serviceSlice";
import categoryReducer from "./categorySlice";




export const store = configureStore({
    reducer: {
        auth: authReducer,
        service: serviceReducer,
        category: categoryReducer
    }
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector