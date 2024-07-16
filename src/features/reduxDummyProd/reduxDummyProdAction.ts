import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductDummy } from './types';

export const getDummyProducts = createAsyncThunk<IProductDummy[], void, { rejectValue: string }>(
  'reduxDummyProdAction/getDummyProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDummyProduct = createAsyncThunk<number, number, { rejectValue: string }>(
  'reduxDummyProdAction/deleteDummyProduct',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
