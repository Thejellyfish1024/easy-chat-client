/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";

const Messages = ({ messages, refetch }) => {
    // console.log("messages", messages);

    const messagesEndRef = useRef()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div className="h-full flex flex-col justify-end">
            <div  className="space-y-4 overflow-y-auto no-scrollbar pb-4">
                {
                    messages?.map(message =>
                        <SingleMessage
                            key={message._id}
                            message={message}
                            refetch={refetch}
                        >
                        </SingleMessage>)
                }
                <div ref={messagesEndRef}/>
            </div>
        </div>
    );
};

export default Messages;