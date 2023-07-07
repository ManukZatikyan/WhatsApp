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
    chat: Array<Chat>
}

const initialState: ChatState = {
    chat:[]

}

export const getUsderChats = createAsyncThunk<
    Chat[],
    any,
    { rejectValue: string }
>('chat/get-user-chats', async function (userId, { rejectWithValue }) {
    const responce: any = await axiosClient.post('chat/get-user-chats', userId)
    if (responce.data) {
        return responce.data
    } else {
        return responce;
    }
});
export const getUsersMessage= createAsyncThunk<
any,
any,
{ rejectValue: string }
>('get-chat-messages',async function (chatId, { rejectWithValue }) {
    const responce: any = await axiosClient.post('chat/get-chat-messages', chatId)
    if (responce.data) {
        return responce.data
    } else {
        return responce;
    }
})
export const add_Message= createAsyncThunk<
any,
any,
{ rejectValue: string }
>('add-message',async function (newMessage, { rejectWithValue }) {
    const responce: any = await axiosClient.post('chat/add-message', newMessage)
    // if (responce.data) {
    //     return responce.data
    // } else {
    //     return responce;
    // }
})
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
        // build.addCase(getUsersMessage.fulfilled, (state, action) => {
        //     state.chat = action.payload
        // })
    }
})
export const selectChat = (state: RootState) => state.chat.chat
// export const selectmessage = (state: RootState) => state.chat.message
// export const { logOutUser } = authSlice.actions