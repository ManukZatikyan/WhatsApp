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