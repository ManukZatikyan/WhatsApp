export interface Data {
        id: number;
        name: string;
        photos: string;
        lastMessage: string;
        time: string;
        totalUnread: number;

}
export interface ChatLists {
        item: Data,
        index: number
}

export interface Chats {
        _id: string
        author: string
        body: string
        time: string
        seen: boolean
}
export interface Login{
        emailOrPhoneNumber:string
        password:string
}