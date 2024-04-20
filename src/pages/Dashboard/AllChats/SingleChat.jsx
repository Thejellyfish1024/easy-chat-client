/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";
import useSpecificChats from "../../../hooks/useSpecificChats";
import useAuth from "../../../hooks/useAuth";

const SingleChat = ({ contact }) => {
    const { user } = useAuth();
    const { data: userData } = useUser(contact);
    const { activeChat, setActiveChat } = useContext(ConversationContext);
    const active = activeChat === contact;
    const { data: messages } = useSpecificChats(contact);
    const lastMessage = messages?.slice(-1);
    // console.log(lastMessage);
    const messageDate = lastMessage?.[0]?.date?.split(",")[0];
    // console.log(messageDate);

    // Get the current date
    const today = new Date();
    // Set the time to midnight to compare only dates
    today?.setHours(0, 0, 0, 0);

    // Assuming messageDate is the date of the message
    const setMessageDate = new Date(messageDate); // Example date, replace this with the actual date of the message

    // Set the time to midnight to compare only dates
    setMessageDate?.setHours(0, 0, 0, 0);

    // Calculate the time difference in milliseconds
    const timeDifference = today?.getTime() - setMessageDate?.getTime();

    // Convert milliseconds to days
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    // Determine if the message was sent today, yesterday, or before
    let messageStatus;
    if (daysDifference === 0) {
        messageStatus = "Today";
    } else if (daysDifference === 1) {
        messageStatus = "Yesterday";
    } else {
        messageStatus = messageDate;
    }

    // console.log("Message status:", messageStatus);

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
                    <p className="font-bold w-3/5">{userData?.name}</p>
                    <p className={`text-xs font-semibold ${active ? "text-gray-300" : "text-slate-600"}`}>
                        {
                            messageDate ?
                                <>
                                    {/* {messageDate} */}
                                    {messageStatus}
                                </>
                                :
                                <>00/00/0000</>
                        }
                    </p>
                </div>
                {/* message */}
                <p className={` pr-4 text-sm ${active ? "text-gray-300" : "text-slate-600"}`}
                >
                    {
                        lastMessage?.length > 0 ?
                            <>
                                {
                                    lastMessage[0]?.sender === user?.email ?
                                        <>
                                            You: {lastMessage[0]?.message?.slice(0, 56)}
                                        </>
                                        :
                                        <>
                                            {lastMessage[0]?.message?.slice(0, 56)}
                                        </>
                                }

                                {
                                    lastMessage[0]?.message?.length > 56 &&
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