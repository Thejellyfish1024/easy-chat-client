// import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import logo from "../../assets/easy-chat-logo.jpg"
import { Link } from "react-router-dom";
import { ConversationContext } from "../../provider/ConversationProvider";
import Sidebar from "../../pages/Dashboard/Sidebar/Sidebar";
import AddNewContact from "../../pages/Dashboard/AddNewContact/AddNewContact";
import Search from "../../pages/Dashboard/Search/Search";
import AllChats from "../../pages/Dashboard/AllChats/AllChats";
import ChatBox from "../../pages/Dashboard/ChatBox/ChatBox";
import UserInfo from "../../pages/Dashboard/UserInfo/UserInfo";

const Mobile = () => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [openAddContact, setOpenAddContact] = useState(false);
    const { activeChat } = useContext(ConversationContext);

    return (
        <div className="flex lg:gap-6 h-screen bg-[#FFF] rounded-md relative">
            {/* sidebar section*/}
            <div className="">
                <Sidebar setOpenUserInfo={setOpenUserInfo}></Sidebar>
            </div>

            {
                activeChat ?
                    < div className="w-full transition-all duration-500 border-l">
                        {/* chat box section */}
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
                    :
                    <>
                        {/* All chats section */}
                        <div className="lg:w-[510px] w-full space-y-4 py-1 md:pr-6 pr-3 lg:pr-0">
                            <div className="flex justify-between items-center pt-2">
                                <div className="flex gap-2 items-center">
                                    <img src={logo} className="w-10" alt="" />
                                    <h3 className="text-xl  font-bold">Chats</h3>
                                </div>
                                <button
                                    className="text-blue-500"
                                    type="button"
                                    onClick={() => setOpenAddContact(!openAddContact)}>
                                    <IoMdAddCircle className="text-2xl"></IoMdAddCircle>
                                </button>
                            </div>
                            {/* Add New Contact Box */}
                            <div
                                className={`fixed shadow-xl transition-all duration-500 right-4 ${openAddContact ? "top-8 opacity-100" : "-top-[575px] opacity-100"}`}>
                                <AddNewContact setOpenAddContact={setOpenAddContact}></AddNewContact>
                            </div>
                            <Search></Search>
                            <AllChats></AllChats>
                        </div>
                    </>
            }



            {/* userInfo Box */}
            <div className={`fixed shadow-xl pr-7 transition-all duration-500 ${openUserInfo ? "bottom-0 " : "-bottom-[500px]"}`}>
                <UserInfo
                    openUserInfo={openUserInfo}
                    setOpenUserInfo={setOpenUserInfo}
                ></UserInfo>
            </div>



        </div >
    );
};

export default Mobile;