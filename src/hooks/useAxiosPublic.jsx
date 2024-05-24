import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    // baseURL: 'https://easy-chat-server.vercel.app'
    baseURL: 'https://easy-chat-server-2jt6.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;