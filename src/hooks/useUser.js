import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = (email) => {
    const axiosPublic = useAxiosPublic();
    // console.log(email);

    const {data, refetch} = useQuery({
        queryKey: ['profile',email],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/users/${email}`)
           return await data.data;
        }
    })
    // console.log('user data',data);

    return {data, refetch};
};

export default useUser;