import SendMessage from "./SendMessage";
import Messages from "./Messages";
import useSpecificChats from "../../../hooks/useSpecificChats";
import { ConversationContext } from "../../../provider/ConversationProvider";
import { useContext, useState } from "react";
import useUser from "../../../hooks/useUser";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ContactInfo from "./ContactInfo";

const ChatBox = () => {
    const [openContactInfo, setOpenContactInfo] = useState(false);
    const { activeChat } = useContext(ConversationContext);
    const { data: userData } = useUser(activeChat)
    const { data: messages, refetch } = useSpecificChats(activeChat);
    return (
        <div className="w-full h-screen lg:py-3 lg:pr-3 flex flex-col lg:gap-3">
            {/* User info */}
            <div className="w-full bg-[#001d3d] text-white p-4  lg:rounded-xl flex justify-between items-center">
                <div onClick={() => setOpenContactInfo(!openContactInfo)} className="flex gap-4 items-center">
                    {/* user image */}
                    {
                        userData?.image === "" ?
                            <img
                                className="xl:w-10 w-8 xl:h-10 h-8 rounded-full"
                                src="https://a0.anyrgb.com/pngimg/1912/680/icon-user-profile-avatar-ico-facebook-user-head-black-icons-circle-thumbnail.png"
                                alt="" />
                            :
                            <img
                                className="xl:w-10 w-8 xl:h-10 h-8 rounded-full"
                                src={userData?.image}
                                alt="" />
                    }
                    <p className="font-bold">{userData?.name}</p>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="space-x-4">
                        <button className="p-2 rounded-full bg-sky-600">
                            <IoVideocam className="text-lg"></IoVideocam>
                        </button>
                        <button className="p-2 rounded-full bg-sky-600">
                            <IoCall className=""></IoCall>
                        </button>
                    </div>
                    <BsFillInfoCircleFill className="text-2xl"></BsFillInfoCircleFill >

                </div>
            </div>

            {/* contact info */}
            <div className={`fixed shadow-xl transition-all duration-500 ${openContactInfo ? "top-20 " : "-top-[500px]"}`}>
                <ContactInfo
                    contact={activeChat}
                    setOpenContactInfo={setOpenContactInfo}
                    openContactInfo={openContactInfo}
                ></ContactInfo>
            </div>

            {/* Chats */}
            <div className="w-full flex-grow  bg-[#d8e2dc] shadow-md lg:rounded-xl lg:px-4">
                <div className="flex flex-col">
                    <div className="flex-grow lg:h-[78vh] h-[85vh] lg:px-0 px-2">
                        <Messages messages={messages} refetch={refetch}></Messages>
                    </div>
                    <SendMessage refetch={refetch}></SendMessage>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;