import { FaUser } from "react-icons/fa";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import useSpecificChats from "../../../hooks/useSpecificChats";
import { ConversationContext } from "../../../provider/ConversationProvider";
import { useContext } from "react";

const ChatBox = () => {
    const {activeChat} = useContext(ConversationContext);

    const {data : messages, refetch} = useSpecificChats(activeChat);
    return (
        <div className="w-full h-screen py-3 pr-3 flex flex-col gap-3">
            {/* User info */}
            <div className="w-full bg-[#001d3d] text-white p-4  rounded-xl flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <p className="bg-gray-300 w-fit h-fit p-3 rounded-full text-white">
                        <FaUser className="xl:text-xl"></FaUser>
                    </p>
                    <p className="font-bold">sinthi poti</p>
                </div>
                <div>kk</div>
            </div>

            {/* Chats */}
            <div className="w-full flex-grow  bg-[#d8e2dc] shadow-md rounded-xl px-4 pb-2">
                <div className="flex flex-col">
                    <div className="flex-grow h-[78vh]">
                        <Messages messages={messages} refetch={refetch}></Messages>
                    </div>
                    <SendMessage refetch={refetch}></SendMessage>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;