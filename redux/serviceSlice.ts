import { createSlice } from '@reduxjs/toolkit';
const serviceSlice = createSlice({
    name: 'category',
    initialState:{
        service: [],
        serviceAndCategory: []
    },
    reducers:{
        setServiceAction: (state, action)=>{
            state.service = action.payload;

        },
        setServiceAndCategoryAction: (state, action) => { 
          state.serviceAndCategory = action.payload
        }
    
    }
});
export const { setServiceAction, setServiceAndCategoryAction } = serviceSlice.actions;

const serviceReducer =   serviceSlice.reducer
export default serviceReducer;