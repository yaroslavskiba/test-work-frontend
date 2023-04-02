import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type paramType = {
  list: string;
  frame: string;
  pipe: string;
  area: number | null;
  sheetsAmount: number | null;
  pipesAmount: number | null;
  fixAmount: number | null;
  sheetPrice: number | null;
  pipePrice: number | null;
  fixPrice: number | null;
  sum: number | null;
};

const initialState: paramType = {
  list: '',
  frame: '',
  pipe: '',
  area: null,
  sheetsAmount: null,
  pipesAmount: null,
  fixAmount: null,
  sheetPrice: null,
  pipePrice: null,
  fixPrice: null,
  sum: null,
};

const paramSlice = createSlice({
  name: 'param state',
  initialState,
  reducers: {
    calculateResult: (state, action: PayloadAction<paramType>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { calculateResult } = paramSlice.actions;
export default paramSlice.reducer;
