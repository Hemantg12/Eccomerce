import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});
//setUserDetails is a action creater.is is destructured from reducer.

export const { setUserDetails } = userSlice.actions;
//it send to store as userReducer and you can give it any name in store.
export default userSlice.reducer;
