import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSpecificChats = (receiver) => {
    const {user : sender} = useAuth();
    const axiosSecure = useAxiosSecure();
    // console.log(email);

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['chats',receiver],
        queryFn: async () =>{
           const data = await axiosSecure.get(`/chats?sender=${sender?.email}&&receiver=${receiver}`)
           return await data.data;
        }
    })
    console.log('chat data',data);

    return {data, refetch, isLoading};
};

export default useSpecificChats;