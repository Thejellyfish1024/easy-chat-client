// import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import AllChats from "./AllChats/AllChats";
import ChatBox from "./ChatBox/ChatBox";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import UserInfo from "./UserInfo/UserInfo";
import { IoMdAddCircle } from "react-icons/io";
import { io } from "socket.io-client";
import AddNewContact from "./AddNewContact/AddNewContact";
// import Developer from "./Developer/Developer";

const Dashboard = () => {

    const socket = useMemo(() => io("http://localhost:5000", { withCredentials: true, }),
        []
    );

    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [openAddContact, setOpenAddContact] = useState(false);


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
            <div className="w-[500px] space-y-4 py-3">
                <div className="flex justify-between items-center pt-2">
                    <h3 className="text-xl  font-bold">Chats</h3>
                    <button
                        type="button"
                        onClick={() => setOpenAddContact(!openAddContact)}>
                        <IoMdAddCircle className="text-2xl"></IoMdAddCircle>
                    </button>
                </div>
                {/* Add New Contact Box */}
                <div className={`fixed shadow-xl transition-all duration-500 left-[450px] ${openAddContact ? "top-5 opacity-100" : "-top-[500px] opacity-0"}`}>
                    <AddNewContact></AddNewContact>
                </div>
                <Search></Search>
                <AllChats></AllChats>
            </div>
            {/* chat box section */}
            <div className="w-full">
                <ChatBox></ChatBox>
            </div>
            {/* userInfo Box */}
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