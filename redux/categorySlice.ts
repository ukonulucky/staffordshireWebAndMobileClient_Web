import { createSlice } from '@reduxjs/toolkit';
const categorySlice = createSlice({
    name: 'category',
    initialState:{
        category:[],
    },
    reducers:{
        setCategoryAction: (state, action)=>{
            state.category = action.payload;

        },
       
      

    }
});
export const { setCategoryAction } = categorySlice.actions;

const categoryReducer = categorySlice.reducer
export default categoryReducer