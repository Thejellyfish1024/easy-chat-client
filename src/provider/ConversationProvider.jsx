/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo,useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { io } from "socket.io-client";
import useSpecificChats from "../hooks/useSpecificChats";

export const ConversationContext = createContext(null);

const ConversationProvider = ({ children }) => {
    // const socket = useMemo(() => io("wss://easy-chat-server.vercel.app", { withCredentials: true, }),
    //     []
    // );
    const socket = useMemo(() => io("https://easy-chat-server.vercel.app", { withCredentials: true, }),
        []
    );
    // const socket = useMemo(() => io("http://localhost:5000", { withCredentials: true, }),
    //     []
    // );

    const [chatLoading, setChatLoading] = useState(false);
    const [activeChat, setActiveChat] = useState("");
    const [myContacts, setMyContacts] = useState([]);
    const { user } = useAuth();
    const { data } = useUser(user?.email);
    const { refetch } = useSpecificChats(activeChat);

    // useEffect(() => {
    //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [conversations])

    // useEffect(() => {
    //     socket?.on("connect", () => {
    //         console.log("connected", socket.id);
    //     })
    // }, [])

    useEffect(() => {
        socket?.on("getMessage", data => {
            // console.log(data?.refetch);
            if(data?.refetch){
                refetch();
            }

        });
    }, [socket]);

    //Send user email
    useEffect(() => {
        socket?.emit("addUser", user?.email || '');
    }, [user]);


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
        myContacts,
    }

    return <ConversationContext.Provider value={conversationInfo}>
        {children}
    </ConversationContext.Provider>
};

export default ConversationProvider;