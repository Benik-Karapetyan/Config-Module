import {createSlice, PayloadAction, Draft} from '@reduxjs/toolkit';
import {AppState, Message} from '../../app/types';

const initialState: AppState = {
  loading: false,
  message: {
    show: false,
    text: '',
    type: '',
  },
};

const generalSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoading: (state: Draft<AppState>, {payload}: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    showMessage: (state: Draft<AppState>, {payload}: PayloadAction<Message>) => {
      state.message = payload;
    },
  },
});

export const {toggleLoading, showMessage} = generalSlice.actions;

export default generalSlice.reducer;
