/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
import LoadingSpinner from "../Common/LoadingSpinner";

const Messages = ({ messages, refetch, isLoading }) => {
    // console.log("messages", messages);

    const messagesEndRef = useRef()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    // reactScrollToBottom

    return (
        <div className="h-full flex flex-col justify-end">
            {
                isLoading ?
                    <div className="flex w-full h-full justify-center items-center">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                    :
                    <div className="space-y-4 overflow-y-auto no-scrollbar pb-4">
                        {
                            messages?.map(message =>
                                <SingleMessage
                                    key={message._id}
                                    message={message}
                                    refetch={refetch}
                                >
                                </SingleMessage>)
                        }
                        <div ref={messagesEndRef} />
                    </div>
            }
        </div>
    );
};

export default Messages;