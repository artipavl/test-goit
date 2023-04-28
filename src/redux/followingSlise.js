import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  following: [],
};

export const followingSlise = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    following: (state, action) => {
      if (state.following.includes(action.payload)) {
        state.following = state.following.filter(id => id !== action.payload);
      } else {
        state.following.push(action.payload);
      }
    },
  },
});

export const { following } = followingSlise.actions;

export default followingSlise.reducer;
