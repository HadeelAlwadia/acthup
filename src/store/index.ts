import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducers';
export const store = configureStore({
  reducer
})

//to know type of store
export type AppState = ReturnType<typeof store.getState>;
//to konw type of dispatch
export type AppDispatch = typeof store.dispatch;