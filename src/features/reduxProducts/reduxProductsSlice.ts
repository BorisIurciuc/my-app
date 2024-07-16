import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './types';
import { getProducts } from './reduxProductsAction';

interface IproductSlice {
    products: IProduct[]
    isLoading: boolean,
    error: string,
  };

const initialState: IproductSlice = {
  products: [],
  isLoading: false,
  error: ''
};

export const reduxProductsSlice = createSlice({
    name: 'reduxProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false
            state.products = []
            state.error = action.payload as string
        })
    },
});

export default reduxProductsSlice;
// export const { } = reduxProductsSlice.actions