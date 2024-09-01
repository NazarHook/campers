/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {  getCampById, getCamps, reserveCamp } from './operations';
const handlePending = (state) => {
    state.loading = true
    }
    const handleRejected = (state) => {
        state.loading = false
        state.error = true
    }
export const slice = createSlice({
    name: 'transports',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCamps.pending, handlePending)
        .addCase(getCamps.fulfilled, (state, action) => {
            state.loading = true
            state.items = action.payload
            state.loading = false
        })
        .addCase(getCamps.rejected, handleRejected)
        .addCase(getCampById.pending, handlePending)
        .addCase(getCampById.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(getCampById.rejected, handleRejected)
        .addCase(reserveCamp.pending, handlePending)
        .addCase(reserveCamp.fulfilled, (state, action) => {
            state.loading = false
        } )
        .addCase(reserveCamp.rejected, handleRejected)
    }
})
export const transportsReducer = slice.reducer