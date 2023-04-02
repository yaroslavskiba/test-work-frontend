import { configureStore } from '@reduxjs/toolkit';
import reducerParams from './slices/resultSlice';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import isClickedSlice from './slices/isClickedSlice';
import basketSlice from './slices/basketSlice';

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    resultList: reducerParams,
    isClicked: isClickedSlice,
    basket: basketSlice,
  },
});

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
