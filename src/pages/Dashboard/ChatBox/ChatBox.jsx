import { FaUser } from "react-icons/fa";
import SendMessage from "./SendMessage";
import Messages from "./Messages";

const ChatBox = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            {/* User info */}
            <div className="w-full bg-[#001d3d] text-white p-4 rounded-xl flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <p className="bg-gray-300 w-fit h-fit p-3 rounded-full text-white">
                        <FaUser className="text-xl"></FaUser>
                    </p>
                    <p className="font-bold">sinthi poti</p>
                </div>
                <div>kk</div>
            </div>

            {/* Chats */}
            <div className="w-full flex-grow  bg-[#d8e2dc] rounded-xl px-4 pb-4">
                <div className="flex flex-col h-full">
                    <div className="flex-grow">
                        <Messages></Messages>
                    </div>
                    <SendMessage></SendMessage>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;