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

export interface StatusData {
        id: number;
        name: string;
        photos: string;
        time: string;
        viewed: boolean;
}

export interface Chats {
        fromId: number
        toId: number
        message: string
        time: string
        seen: boolean
}