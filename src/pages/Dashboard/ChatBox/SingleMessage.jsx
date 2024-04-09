/* eslint-disable react/prop-types */

import { FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";

const SingleMessage = ({ message }) => {
    const { user } = useAuth();
    const { data: userData } = useUser(message?.sender);
    const { scrollRef } = useContext(ConversationContext);
    return (
        <div>
            {
                message?.sender === user?.email ?
                    <div
                        ref={scrollRef}
                        className="flex justify-end w-full">
                        <div>
                            <p className="bg-blue-500 text-gray-200 py-2 px-4 rounded-lg w-fit">{message?.message}</p>
                            <p className="text-right pr-4 text-gray-500 text-xs mt-1">3:45</p>
                        </div>
                    </div>
                    :
                    <div
                        ref={scrollRef}
                        className="flex gap-4 items-end">
                        {
                            userData?.image ?
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src={userData?.image}
                                    alt="profile" />
                                :
                                <p className="bg-gray-300 w-fit h-fit p-2 rounded-full text-white">
                                    <FaUser></FaUser>
                                </p>
                        }
                        <div>
                            <p className="bg-[#FFF] py-2 px-4 rounded-lg">{message?.message}</p>
                            <p className="mt-1 pl-4 text-gray-500 text-xs">3:45</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleMessage;