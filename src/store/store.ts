import { configureStore } from '@reduxjs/toolkit';
import reducerParams from './slices/paramSlice';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import isClickedSlice from './slices/isClickedSlice';

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    resultList: reducerParams,
    isClicked: isClickedSlice,
  },
});

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
