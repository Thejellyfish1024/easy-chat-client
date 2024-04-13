/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";


const SingleRequest = ({ request, refetch }) => {
    const {user} = useAuth();
    const { data: userData } = useUser(request);
    const axiosSecure = useAxiosSecure();

    const handleAccept = async() => {
        const res = await axiosSecure.post("/add-contact", { newContact: request, currentUser: user?.email })
            // console.log(res?.data);
            if (res?.data?.update) {
                refetch();
                toast.success('Successfully added');
            }
    }

    const handleDecline = async() => {
        const res = await axiosSecure.put(`/delete-request/${user?.email}`, { request: request})
        // console.log(res?.data);
        if (res?.data?.modifiedCount) {
            refetch();
            toast.success('Successfully deleted');
        }
    }
    return (
        <div className="flex p-5 bg-slate-200 gap-5 rounded-lg">
            {
                userData?.image ?
                    <img src={userData?.image} className="w-20 h-20 rounded-lg" alt="" />
                    :
                    <img className="w-20 h-20 rounded-lg" src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1" alt="" />
            }
            <div className="flex flex-col h-full gap-1">
                <p className="font-bold">{userData?.name}</p>
                <p className="text-xs font-semibold text-gray-400">{userData?.email}</p>
                {/* accept and decline buttons */}
                <div className="flex gap-5 font-semibold">
                    <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded-md">Accept</button>
                    <button onClick={handleDecline} className="hover:bg-red-500 hover:border-red-500 border border-gray-500 text-gray-600 hover:text-white px-5 py-1 rounded-md">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;