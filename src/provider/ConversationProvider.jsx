/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { io } from "socket.io-client";
import useSpecificChats from "../hooks/useSpecificChats";
import notificationSound from "../assets/sounds/notification.mp3"

export const ConversationContext = createContext(null);

const ConversationProvider = ({ children }) => {
    // const [socket, setSocket] = useState(null);
    const [chatLoading, setChatLoading] = useState(false);
    const [contactsLoading, setContactsLoading] = useState(true);
    const [activeChat, setActiveChat] = useState("");
    const [myContacts, setMyContacts] = useState([]);
    const { user } = useAuth();
    const { data } = useUser(user?.email);
    const { refetch } = useSpecificChats(activeChat);

    // const socket = useMemo(() => io("wss://easy-chat-server.vercel.app", { withCredentials: true, }),
    //     []
    // );
    const socket = useMemo(() => io("http://localhost:5000", { withCredentials: true, }),
        []
    );

    // useEffect(() => {
    // 	if (user) {
    // 		const socket = io("http://localhost:5000", { withCredentials: true, });

    // 		setSocket(socket);

    // 		// socket.on() is used to listen to the events. can be used both on client and server side
    // 		// socket.on("getOnlineUsers", (users) => {
    // 		// 	setOnlineUsers(users);
    // 		// });

    // 		return () => socket.close();
    // 	} else {
    // 		if (socket) {
    // 			socket.close();
    // 			setSocket(null);
    // 		}
    // 	}
    // }, [user]);

    useEffect(() => {
        socket?.on("getMessage", data => {
            console.log(data);
            if (data?.refetch) {
                refetch();
                const sound = new Audio(notificationSound);
                sound.play();
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
            setContactsLoading(false);
        }
    }, [data])


    const conversationInfo = {
        activeChat,
        setActiveChat,
        chatLoading,
        setChatLoading,
        myContacts,
        setContactsLoading,
        contactsLoading
    }

    return <ConversationContext.Provider value={conversationInfo}>
        {children}
    </ConversationContext.Provider>
};

export default ConversationProvider;