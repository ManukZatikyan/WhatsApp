import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axiosClient from "../../axiosConfig/axiosApi";
import { Login } from "../../types/Interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export interface UserData {
    userId: number
    name: string
    surname: string
    email: string
    password: string
    photo: string
    phoneNumber: string
    phoneNumberVerify: boolean
    emailVerify: boolean

}
export interface AuthState {
    user: UserData,
    loading?: boolean,
    error?: any,
    message?: string | undefined,
    success?: boolean,
}
const initialState: AuthState = {
    user: {
        userId: NaN,
        name: "",
        email: "",
        password: "",
        surname: "",
        photo: "",
        phoneNumber: "",
        phoneNumberVerify: false,
        emailVerify: false,
    },
    message: '',
}
export const loginUser = createAsyncThunk<
    string,
    Login,
    { rejectValue: string }
>('auth/login', async function (user, { rejectWithValue }) {
        const responce: any = await axiosClient.post('auth/login',user)
        // console.log(responce.data,'------------')
        if (responce.data.accessToken) {
            AsyncStorage.setItem('token', responce.data.accessToken);
            const User:any=await axiosClient.get('auth/get-user')
            // console.log("USER",User.data,"-----------")
            return {user:User.data,message:User.data.message}
        }else{
            return responce.data.message;
        }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutUser: (state) => {
            state.user = {
                userId: NaN,
                name: "",
                email: "",
                password: "",
                surname: "",
                photo: "",
                phoneNumber: "",
                phoneNumberVerify: false,
                emailVerify: false,
            };
            state.message = ''
        }
    },
    extraReducers: (build) => {
        build.addCase(loginUser.fulfilled, (state, action) => {
            // console.log("Slice", action.payload.user)
            //@ts-ignore
            state.message = action.payload.message
            //@ts-ignore
            state.user=action.payload.user
        })
    }
})
export const selectUser = (state: RootState) => state.auth.user
export const selectmessage = (state: RootState) => state.auth.message
export const { logOutUser } = authSlice.actions