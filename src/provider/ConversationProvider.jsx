/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

export const ConversationContext = createContext(null);

const ConversationProvider = ({ children }) => {
    const [chatLoading, setChatLoading] = useState(false);
    const [activeChat, setActiveChat] = useState("");
    const [myContacts, setMyContacts] = useState([]);

    const { user } = useAuth();
    const { data } = useUser(user?.email);
    // console.log(myContacts);

    useEffect(() => {
        if (data) {
            setMyContacts(data?.contacts)
        }
    }, [data])


    const conversationInfo = {
        activeChat,
        setActiveChat,
        chatLoading,
        setChatLoading,
        myContacts
    }

    return <ConversationContext.Provider value={conversationInfo}>
        {children}
    </ConversationContext.Provider>
};

export default ConversationProvider;