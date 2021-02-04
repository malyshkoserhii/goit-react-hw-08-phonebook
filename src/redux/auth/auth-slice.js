import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  name: ['username'],
  value: 'Ant Design',

  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isBeingLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isBeingLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isBeingLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isBeingLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
