import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'
const BASE_URL = 'https://65d1655fab7beba3d5e452c6.mockapi.io';

axios.defaults.baseURL = BASE_URL;



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/materials')
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/materials/${contactId}`)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('/materials', newContact)
        return response.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.message)
    }
})