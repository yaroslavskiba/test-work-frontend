import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type paramType = {
  list: string;
  frame: string;
  pipe: string;
  area: number | null;
  sheetPrice: number | null;
  pipePrice: number | null;
  fixPrice: number | null;
};

const initialState: paramType = {
  list: '',
  frame: '',
  pipe: '',
  area: null,
  sheetPrice: null,
  pipePrice: null,
  fixPrice: null,
};

const paramSlice = createSlice({
  name: 'param state',
  initialState,
  reducers: {
    calculateResult: (state, action: PayloadAction<paramType>) => {
      state = action.payload;
    },
  },
});

export const { calculateResult } = paramSlice.actions;
export default paramSlice.reducer;
