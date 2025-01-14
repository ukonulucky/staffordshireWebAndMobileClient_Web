import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null ,
  isLoggedIn: false,
  isAppLoading:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    setAppLoaderAction(state, action){
       state.isAppLoading = action.payload
    }
  },
});

export const { loginSuccess, logout, setAppLoaderAction } = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer;