import { createAsyncThunk } from "@reduxjs/toolkit";


import { instance } from "../../service/api";

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  export const clearToken = () => {
    instance.defaults.headers.common.Authorization = "";
  };
  
  export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
      try {
        const { data } = await instance.post("/users/signup", formData);
        console.log("data: ", data);
        setToken(data.token);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const login = createAsyncThunk(
    "auth/login",
    async (formData, thunkAPI) => {
      try {
        const { data } = await instance.post("/users/login", formData);
        setToken(data.token);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
      await instance.post("/users/logout");
      clearToken();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
  export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        const { data } = await instance.get("/users/current");
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );