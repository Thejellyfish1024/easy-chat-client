// import { Outlet } from "react-router-dom";
import { useState } from "react";
import AllChats from "./AllChats/AllChats";
import ChatBox from "./ChatBox/ChatBox";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import UserInfo from "./UserInfo/UserInfo";
import { IoMdAddCircle } from "react-icons/io";
import AddNewContact from "./AddNewContact/AddNewContact";
// import Developer from "./Developer/Developer";

const Dashboard = () => {



    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [openAddContact, setOpenAddContact] = useState(false);

    return (
        <div className="flex gap-6 max-h-screen bg-[#FFF] rounded-md relative">
            {/* sidebar section*/}
            <div className="py-3 pl-3">
                <Sidebar setOpenUserInfo={setOpenUserInfo}></Sidebar>
            </div>
            {/* All chats section */}
            <div className="w-[500px]  space-y-4 py-3">
                <div className="flex justify-between items-center pt-2">
                    <h3 className="text-xl  font-bold">Chats</h3>
                    <button
                        className="text-blue-500"
                        type="button"
                        onClick={() => setOpenAddContact(!openAddContact)}>
                        <IoMdAddCircle className="text-2xl"></IoMdAddCircle>
                    </button>
                </div>
                {/* Add New Contact Box */}
                <div
                    className={`fixed shadow-xl transition-all duration-500 left-[450px] ${openAddContact ? "top-8 opacity-100" : "-top-[550px] opacity-0"}`}>
                    <AddNewContact setOpenAddContact={setOpenAddContact}></AddNewContact>
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