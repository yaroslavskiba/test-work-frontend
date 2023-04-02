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

const initialState: paramType[] = [];

const basketSlice = createSlice({
  name: 'param state',
  initialState,
  reducers: {
    basketAdd: (state, action: PayloadAction<paramType>) => {
      state.push(action.payload);
    },
  },
});

export const { basketAdd } = basketSlice.actions;
export default basketSlice.reducer;
