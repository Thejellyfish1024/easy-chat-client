/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { ConversationContext } from "../../../provider/ConversationProvider";
const SendMessage = ({refetch}) => {
    const [message, setMessage] = useState("");
    const {activeChat} = useContext(ConversationContext);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(message);
        const newMessage = {
            sender: user?.email,
            receiver: activeChat,
            message: message
        }
        const { data } = await axiosSecure.post("/send-message", newMessage);
        // console.log(data);
        if (data?.insertedId) {
            refetch();
            setMessage("");
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex lg:gap-2">
            <input type="text" name="" id=""
                value={message}
                onChange={(e) => {
                    setMessage(e?.target?.value)
                    // handleTextAreaHeight();
                }}
                className="w-full border lg:py-2 py-[9px] px-6 bg-[#FFF] lg:rounded-lg"
                placeholder="Message..." />
            <button
                disabled={message == "" ? true : false}
                className={` px-3 py-1 text-white lg:rounded-lg ${message == "" ? "bg-slate-300" : "bg-blue-500"}`}>
                <FaArrowUp></FaArrowUp>
            </button>
        </form>
    );
};

export default SendMessage;