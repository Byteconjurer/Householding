import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedUsers } from '../../data/data';
import { User } from '../../data/types';

type UserState = {
  mockedUsers: User[];
  currentUser?: User;
};

const initialState: UserState = {
  mockedUsers: mockedUsers,
  currentUser: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState, // singular en användare per telefon, settings
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.currentUser = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
