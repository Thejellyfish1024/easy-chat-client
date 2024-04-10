// import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import AllChats from "./AllChats/AllChats";
import ChatBox from "./ChatBox/ChatBox";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
import UserInfo from "./UserInfo/UserInfo";
import { IoMdAddCircle } from "react-icons/io";
import AddNewContact from "./AddNewContact/AddNewContact";
import { ConversationContext } from "../../provider/ConversationProvider";
import logo from "../../assets/easy-chat-logo.jpg"
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [openAddContact, setOpenAddContact] = useState(false);
    const { activeChat } = useContext(ConversationContext);

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
            <div className="w-full transition-all duration-500">
                {
                    activeChat ?
                        <ChatBox></ChatBox>
                        :
                        <div className="flex flex-col h-screen justify-center items-center border">
                            <img
                                className="w-20"
                                src={logo}
                                alt="logo" />
                            <h2 className="text-2xl font-bold italic text-blue-500">Easy Chat</h2>
                            <h3 className="text-center font-medium mt-2 text-gray-500">@Developed by <Link className="hover:text-black hover:underline" target="_blank" to="https://webdevshihab.netlify.app/">Mohammad Rahim</Link></h3>
                        </div>
                }
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