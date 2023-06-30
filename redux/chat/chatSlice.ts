import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axiosClient from "../../axiosConfig/axiosApi";

interface Message {
    _id: string
    author: string
    body: string
    time: string
    seen: boolean
}

interface Chat {
    _id: string
    members: Array<any>
    messages: Array<Message>
}


interface ChatState {
    chat: Chat
}

const initialState: ChatState = {
    chat: {
        _id: '',
        members: [],
        messages: []
    }

}

export const getUsderChats = createAsyncThunk<
    Chat,
    any,
    { rejectValue: string }
>('chat/get-user-chats', async function (userId, { rejectWithValue }) {
    const responce: any = await axiosClient.post('chat/get-user-chats', userId)
    console.log(responce.data, '------------')
    if (responce.data) {
        return responce.data
    } else {
        return responce;
    }
});

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        logOutUser: (state) => {
        }
    },
    extraReducers: (build) => {
        build.addCase(getUsderChats.fulfilled, (state, action) => {
            state.chat = action.payload
        })
    }
})
export const selectChat = (state: RootState) => state.chat.chat
// export const selectmessage = (state: RootState) => state.chat.message
// export const { logOutUser } = authSlice.actions