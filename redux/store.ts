import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'

const reducer = combineReducers({
    auth: authSlice.reducer

})

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store
