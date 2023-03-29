import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type paramType = {
  material: string;
  frame: string;
  pipe: string;
  width: number;
  length: number;
};

const initialState: paramType = {
  material: '',
  frame: 'none',
  pipe: '',
  width: 0,
  length: 0,
};

const paramSlice = createSlice({
  name: 'param state',
  initialState,
  reducers: {
    addMaterial: (state, action: PayloadAction<string>) => {
      state.material = action.payload;
    },
  },
});

export const { addMaterial } = paramSlice.actions;
export default paramSlice.reducer;
