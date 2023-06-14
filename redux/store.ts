import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'

const reducer = combineReducers({
    auth: authSlice.reducer

})
const store = configureStore({
    reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store
