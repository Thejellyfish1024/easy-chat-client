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
    const messageTime = message?.date?.split(",")[1]?.split(":");
    return (
        <div>
            {
                message?.sender === user?.email ?
                    <div className="flex justify-end w-full">
                        <div
                            ref={scrollRef}
                            className="flex justify-end lg:w-3/5 w-4/5">
                            <div>
                                <p className="bg-blue-500 text-gray-200 md:py-2 md:px-4 w-fit px-2 py-1  rounded-lg">{message?.message}</p>
                                <p className="text-right pr-4 text-gray-500 text-[10px] lg:text-[12px] mt-1">
                                    {
                                        messageTime ?
                                            <>
                                                {messageTime[0]}:{messageTime[1]}
                                            </>
                                            :
                                            <>
                                                0:00
                                            </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <div
                        ref={scrollRef}
                        className="flex md:gap-4 gap-2 items-end">
                        {
                            userData?.image ?
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src={userData?.image}
                                    alt="profile" />
                                :
                                <p className="bg-gray-300 w-fit h-fit p-2 rounded-full text-white">
                                    <FaUser className="text-sm md:text-base"></FaUser>
                                </p>
                        }
                        <div className="lg:w-3/5 w-4/5">
                            <p className="bg-[#FFF] md:py-2 md:px-4 w-fit px-2 py-1 rounded-lg">{message?.message}</p>
                            <p className="mt-1 pl-4 text-gray-500 text-[10px] lg:text-[12px]">
                                {
                                    messageTime ?
                                        <>
                                            {messageTime[0]}:{messageTime[1]}
                                        </>
                                        :
                                        <>
                                            0:00
                                        </>
                                }
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleMessage;