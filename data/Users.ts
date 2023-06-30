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

const Users: UserData[] = [
    {
        userId: 1,
        name: "Yura",
        surname: "Alaverdyan",
        email: "yura@gmail.com",
        password: "Yura0123",
        photo: "string",
        phoneNumber: "string",
        phoneNumberVerify: true,
        emailVerify: true,
    },
    {
        userId: 2,
        name: "Manuk",
        surname: "Zatikyan",
        email: "Manuk@gmail.com",
        password: "Manuk0123",
        photo: "string",
        phoneNumber: "string",
        phoneNumberVerify: true,
        emailVerify: true,
    },
    {
        userId: 3,
        name: "Rafi",
        surname: "Antonyan",
        email: "Rafi@gmail.com",
        password: "Rafi0123",
        photo: "string",
        phoneNumber: "string",
        phoneNumberVerify: true,
        emailVerify: true,
    }
]