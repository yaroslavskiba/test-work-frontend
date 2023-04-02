import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const isClickedSlice = createSlice({
  name: 'param state',
  initialState,
  reducers: {
    isClicked: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { isClicked } = isClickedSlice.actions;
export default isClickedSlice.reducer;
