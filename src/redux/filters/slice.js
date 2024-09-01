import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: {
        AC: false,
        Automatic: false,
        Kitchen: false,
        TV: false,
        Bathroom: false,
      },
    body: {
      van: false,
      fully: false,
      alcove: false,
    },
  },
  reducers: {
    changeFilter(state, action) {
       state.location = action.payload
    },
    changeOption(state, action) {
state.equipment = action.payload
    },
    changeBody(state, action) {
        state.body = action.payload
    }
}
});

export const {changeFilter, changeOption, changeBody} = filterSlice.actions
export const filterReducer = filterSlice.reducer;
