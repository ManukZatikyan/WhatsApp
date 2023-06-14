import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Users, { UserData } from "../../data/Users";
import { RootState } from "../store";

export interface AuthState {
    data: UserData,
    loading?: boolean,
    error?: any,
    message?: string,
    success?: boolean,
}
const initialState: AuthState = {
    data: {
        id: NaN,
        name: "",
        email: "",
        password: ""
    },
    message: '',
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            let user = Users.filter(elem => elem.email === action.payload.email && elem.password === action.payload.password)
            if (user.length) {
                state.data = user[0]
            } else {
                state.message = 'error'
            }
        },
        logOutUser: (state) => {
            state.data={
                id: NaN,
                name: "",
                email: "",
                password: ""
            };
            state.message=''
        }
    },
    extraReducers: () => { }
})
export const selectData = (state: RootState) => state.auth.data
export const selectmessage = (state: RootState) => state.auth.message
export const { loginUser} = authSlice.actions
export const { logOutUser} = authSlice.actions