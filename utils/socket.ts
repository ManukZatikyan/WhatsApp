import { io } from "socket.io-client";
//@ts-ignore
const socket = io.connect("http://192.168.1.24:7000/");
export default socket;