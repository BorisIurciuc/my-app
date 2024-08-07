import { createSlice } from '@reduxjs/toolkit';
import { IProductDummy } from './types';
import { deleteDummyProduct, getDummyProducts } from './reduxDummyProdAction';

interface IProductDummySlice {
    productsDummy: IProductDummy[],
    isLoading: boolean,
    error: string,
}

const initialState: IProductDummySlice = {
    productsDummy: [],
    isLoading: false,
    error: '',
};

export const ReduxDummyProdSlice = createSlice({
    name: 'reduxProductsDummy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDummyProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDummyProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productsDummy = action.payload;
            })
            .addCase(getDummyProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.productsDummy = [];
                state.error = action.payload as string;
            })
            .addCase(deleteDummyProduct.fulfilled, (state, action) => {
                state.productsDummy = state.productsDummy.filter(product => product.id !== action.payload);
            })
            .addCase(deleteDummyProduct.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export default ReduxDummyProdSlice;
