import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { choreReducer } from './chore/choresSlice';
import { householdReducer } from './household/householdSlice';
import { householdmemberReducer } from './householdmember/householdmemberSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    household: householdReducer,
    chore: choreReducer,
    householdmember: householdmemberReducer,
  },
});

// ------ TYPESCRIPT ------ //
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
