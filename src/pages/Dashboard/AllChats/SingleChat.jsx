/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";

const SingleChat = ({ contact }) => {
    const { data: userData } = useUser(contact);
    const { activeChat ,setActiveChat } = useContext(ConversationContext);
    const active = activeChat === contact;
    return (
        <div role="button"
            onClick={() => setActiveChat(contact)}
            className={`w-full p-4 rounded-xl flex gap-4 items-center 
         ${active ? "bg-blue-500 text-gray-100" : "bg-gray-200 hover:bg-gray-300"}`}>
            <p className="bg-gray-300 w-fit h-fit p-4 rounded-full text-white">
                <FaUser className="text-2xl"></FaUser>
            </p>
            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="font-bold">{userData?.name}</p>
                    <p className={`text-xs font-semibold ${active ? "text-gray-300" : "text-slate-600"}`}>03/30/2024</p>
                </div>
                <p className={` pr-4 text-sm ${active ? "text-gray-300" : "text-slate-600"}`}
                >
                    {/* {contact?.message?.slice(0, 56)}
                    {
                        contact?.message?.length > 56 &&
                        <span>...</span>
                    } */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sapiente.
                </p>
            </div>
        </div>
    );
};

export default SingleChat;