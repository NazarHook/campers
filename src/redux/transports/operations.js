import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
// const url = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCamps = createAsyncThunk('getAllCamps', 
    async ( _, thunkAPI) => {
    try {
        const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers')
        return response.data.items
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    })
export const getCampById = createAsyncThunk('getCampDetails',
    async (campId, thunkAPI) => {
        try {
            const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${campId}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const reserveCamp = createAsyncThunk('reserveCampCar',
    async (values, thunkAPI) => {
        try {
            const response = await axios.post('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/reservation', values)
return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)