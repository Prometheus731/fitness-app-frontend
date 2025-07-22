  import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
  name: 'auth',
  initialState:{
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    userid: localStorage.getItem('userId') || null
  },
  reducers: {
    setCredentials: (state,action)=> {
      state.user=action.payload.user;
      state.token=action.payload.token;
      state.userid=action.payload.user.sub;

      localStorage.setItem('token',action.payload.token);
      localStorage.setItem('user',JSON.stringify(action.payload.user));
      localStorage.setItem('userid', action.payload.user.sub);
    },
    logOut: (state) => {
     state.user=null;
     state.token=null;
     state.userid=null;
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     localStorage.removeItem('userid');
    },
  },
});

export const { setCredentials, logOut }= authSlice.actions;
export default authSlice.reducer;