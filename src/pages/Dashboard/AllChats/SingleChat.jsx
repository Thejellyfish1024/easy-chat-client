/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";

const SingleChat = ({ chat }) => {
    return (
        <div 
        className={`w-full p-4 rounded-xl flex gap-4 items-center cursor-context-menu
         ${chat?.active ? "bg-blue-500 text-gray-100" : "bg-gray-200 hover:bg-blue-300"}`}>
            <p className="bg-gray-300 w-fit h-fit p-4 rounded-full text-white">
                <FaUser className="text-2xl"></FaUser>
            </p>
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="font-bold">sinthi poti</p>
                    <p className={`text-xs font-semibold ${chat?.active ? "text-gray-300" : "text-slate-600"}`}>03/30/2024</p>
                </div>
                <p className={` pr-4 text-sm ${chat?.active ? "text-gray-300" : "text-slate-600"}`}
                >
                    {chat?.message?.slice(0, 56)}
                    {
                        chat?.message?.length > 56 &&
                        <span>...</span>
                    }
                </p>
            </div>
        </div>
    );
};

export default SingleChat;