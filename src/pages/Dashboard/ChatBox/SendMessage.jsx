/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
const SendMessage = ({refetch}) => {
    const [message, setMessage] = useState("");
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(message);
        const newMessage = {
            sender: user?.email,
            receiver: "abc@gmail.com",
            message: message
        }
        const { data } = await axiosSecure.post("/send-message", newMessage);
        // console.log(data);
        if (data?.insertedId) {
            setMessage("");
            refetch();
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="text" name="" id=""
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
                className="w-full border py-2 px-6 bg-[#FFF] rounded-lg"
                placeholder="Message..." />
            <button
                disabled={message == "" ? true : false}
                className={` px-3 py-1 text-white rounded-lg ${message == "" ? "bg-slate-300" : "bg-blue-500"}`}>
                <FaArrowUp></FaArrowUp>
            </button>
        </form>
    );
};

export default SendMessage;