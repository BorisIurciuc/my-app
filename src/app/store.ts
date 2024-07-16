import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import reduxProductsSlice from "../features/reduxProducts/reduxProductsSlice"
import ReduxDummyProdSlice from "../features/reduxDummyProd/ReduxDummyProdSlice"


export const store = configureStore({
  reducer: {
    reduxProducts: reduxProductsSlice.reducer,
    reduxProductsDummy: ReduxDummyProdSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
