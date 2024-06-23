import { createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';
import { instance } from '../../service/api';

/*const instance = axios.create({
    baseURL: "https://66276169b625bf088c08252a.mockapi.io",
  });*/

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      console.log('Received contacts:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response  = await instance.post('/contacts', { ...contact });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response  = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({id, name, number}, thunkAPI) => {
    try {
      const {data} = await instance.patch(`/contacts/${id}`, {name, number});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)