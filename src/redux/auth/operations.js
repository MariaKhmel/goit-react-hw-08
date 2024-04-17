import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', credentials);
        console.log(res.data)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/login', credentials);
        return res.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

// register - для реєстрації нового користувача.Базовий тип екшену "auth/register".
// login - для логіну існуючого користувача.Базовий тип екшену "auth/login".
// logout - для виходу з додатка.Базовий тип екшену "auth/logout".
// refreshUser - оновлення користувача за токеном.Базовий тип екшену "auth/refresh".