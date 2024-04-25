/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { ConversationContext } from "../../../provider/ConversationProvider";


const SendMessage = ({ refetch }) => {
    const [message, setMessage] = useState("");
    const [messageLoading, setMessageLoading] = useState(false);
    const { activeChat } = useContext(ConversationContext);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessageLoading(true);

        const date = new Date().toLocaleString();
        // console.log(date);
        var seconds = new Date().getTime() / 1000;
        // console.log(message);
        const newMessage = {
            sender: user?.email,
            receiver: activeChat,
            message: message,
            time: seconds,
            date: date
        }
        const { data } = await axiosSecure.post("/send-message", newMessage);
        // console.log(data);
        if (data?.insertedId) {
            refetch();
            setMessageLoading(false)
            setMessage("");
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex lg:gap-2 gap-1">
            <input type="text" name="" id=""
                value={message}
                onChange={(e) => {
                    setMessage(e?.target?.value)
                }}
                className="w-full border outline-none py-2 px-6 bg-[#FFF] rounded-full"
                placeholder="Message..." />
            <button
                disabled={message == "" ? true : false}
                className={` px-3 py-1 text-white duration-150 transition-all rounded-full ${message == "" ? "bg-slate-300" : `bg-blue-500`}`}>
                {
                    messageLoading ?
                        <span className="loading loading-spinner loading-xs text-white"></span>
                        :

                        <FaArrowUp></FaArrowUp>
                }
            </button>
        </form>
    );
};

export default SendMessage;