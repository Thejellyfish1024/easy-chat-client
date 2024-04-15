/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";
import useSpecificChats from "../../../hooks/useSpecificChats";

const SingleChat = ({ contact }) => {
    const { data: userData } = useUser(contact);
    const { activeChat, setActiveChat } = useContext(ConversationContext);
    const active = activeChat === contact;
    const { data: messages } = useSpecificChats(contact);
    const lastMessage = messages?.slice(-1);
    console.log(lastMessage);
    return (
        <div role="button"
            onClick={() => setActiveChat(contact)}
            className={`w-full xl:p-4 p-3 rounded-xl flex gap-4 items-center 
         ${active ? "bg-blue-500 text-gray-100" : "bg-gray-200 hover:bg-gray-300"}`}>
            {/* user image */}
            {
                userData?.image === "" ?
                    <p className="bg-gray-300 w-fit h-fit p-4 rounded-full text-white">
                        <FaUser className="lg:text-2xl md:text-xl text-sm"></FaUser>
                    </p>
                    :
                    <img
                        className="w-[55px] h-[55px] rounded-full"
                        src={userData?.image}
                        alt="" />
            }

            <div className="w-full">
                <div className="flex justify-between items-center w-full">
                    <p className="font-bold">{userData?.name}</p>
                    <p className={`text-xs font-semibold ${active ? "text-gray-300" : "text-slate-600"}`}>03/30/2024</p>
                </div>
                {/* message */}
                <p className={` pr-4 text-sm ${active ? "text-gray-300" : "text-slate-600"}`}
                >
                    {
                        lastMessage ?
                            <>
                                {lastMessage[0]?.message}
                                {
                                    lastMessage?.message?.length > 56 &&
                                    <span>...</span>
                                }
                            </>
                            :
                            <p>You are connected. You can chat with each other now</p>
                    }
                </p>
            </div>
        </div>
    );
};

export default SingleChat;