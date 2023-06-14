export interface UserData{
    id:number
    name:string
    email:string
    password:string
}

const Users:UserData[]=[
    {
        id:1,
        name:"Yura",
        email:"yura@gmail.com",
        password:"Yura0123"
    },
    {
        id:2,
        name:"Manuk",
        email:"Manuk@gmail.com",
        password:"Manuk0123"
    },
    {
        id:3,
        name:"Rafi",
        email:"Rafi@gmail.com",
        password:"Rafi0123"
    }
]
export default Users