// import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import AllChats from "./AllChats/AllChats";
import ChatBox from "./ChatBox/ChatBox";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import UserInfo from "./UserInfo/UserInfo";
import { io } from "socket.io-client";
// import Developer from "./Developer/Developer";

const Dashboard = () => {

    const socket = useMemo(() => io("http://localhost:5000", {withCredentials: true,}),
    []
    );

    const [openUserInfo, setOpenUserInfo] = useState(false);


    useEffect(() => {
        socket?.on("connect", () => {
            console.log("connected", socket.id);
        })
    }, [])

    return (
        <div className="flex gap-6 max-h-screen bg-[#FFF] rounded-md relative">
            {/* sidebar section*/}
            <div className="py-3 pl-3">
                <Sidebar setOpenUserInfo={setOpenUserInfo}></Sidebar>
            </div>
            {/* All chats section */}
            <div className="w-[500px] space-y-8 pt-6">
                <Search></Search>
                <AllChats></AllChats>
            </div>
            {/* chat box section */}
            <div className="w-full">
                <ChatBox></ChatBox>
            </div>
            <div className={`fixed shadow-xl transition-all duration-500 ${openUserInfo ? "bottom-0 " : "-bottom-[500px]"}`}>
                <UserInfo
                    openUserInfo={openUserInfo}
                    setOpenUserInfo={setOpenUserInfo}
                ></UserInfo>
            </div>
        </div>
    );
};

export default Dashboard;