import { profileReducer } from './profile/reducer'
import { configureStore } from '@reduxjs/toolkit'
 
export const store = configureStore({
  reducer: {
    profile: profileReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch