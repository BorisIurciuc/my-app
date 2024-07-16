import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProductDummy } from './types';

export const getDummyProducts = createAsyncThunk<IProductDummy[]>(
  'reduxDummyProdAction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
