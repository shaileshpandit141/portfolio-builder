import { createAsyncThunk } from '@reduxjs/toolkit' 
import { api } from '../api' 

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await api.loginApi(credentials) 
            return response.data 
        } catch (error) {
            const errorResponse = error.response ? error.response.data : error.message
            return thunkAPI.rejectWithValue(errorResponse) 
        }
    }
) 

export const refreshAccessTokenThunk = createAsyncThunk(
    'auth/refreshAccessToken',
    async (credentials, thunkAPI) => {
        const refreshToken = thunkAPI.getState().auth.refreshToken 
        try {
            const response = await api.refreshAccessTokenApi({ refresh: refreshToken }) 
            return response.data 
        } catch (error) {
            const errorResponse = error.response ? error.response.data : error.message
            return thunkAPI.rejectWithValue(errorResponse) 
        }
    }
) 
