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
import AddRequests from "../../pages/Dashboard/AddRequests/AddRequests";
import { motion } from "framer-motion"

const Mobile = () => {
    const [openUserInfo, setOpenUserInfo] = useState(false);
    const [openAddContact, setOpenAddContact] = useState(false);
    const [activeRoute, setActiveRoute] = useState("all-chats")
    const { activeChat } = useContext(ConversationContext);

    return (
        <div className="flex lg:gap-6 h-screen bg-[#FFF] rounded-md relative">
            {/* sidebar section*/}
            {
                !activeChat &&

                <div>
                    <Sidebar
                        setActiveRoute={setActiveRoute}
                        activeRoute={activeRoute}
                        setOpenUserInfo={setOpenUserInfo}
                    ></Sidebar>
                </div>
            }

            {/* chat box and all chats */}
            {
                activeRoute === "all-chats" &&

                <>
                    {
                        activeChat ?
                            <div className="w-full transition-all duration-500 border-l">
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
                                <div className="lg:w-[510px] w-full space-y-4 py-1 md:px-3 px-2">
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="flex gap-2 items-center">
                                            <img src={logo} className="w-10" alt="" />
                                            <h3 className="text-xl font-bold">Chats</h3>
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.75, onDurationChange: 500 }}
                                            className="text-blue-500"
                                            type="button"
                                            onClick={() => setOpenAddContact(!openAddContact)}>
                                            <IoMdAddCircle className="text-2xl"></IoMdAddCircle>
                                        </motion.button>
                                    </div>
                                    {/* Add New Contact Box */}
                                    <div
                                        className={`fixed shadow-xl transition-all duration-500 right-4 ${openAddContact ? "top-8 opacity-100" : "-top-[575px] opacity-100"}`}>
                                        <AddNewContact
                                            openAddContact={openAddContact}
                                            setOpenAddContact={setOpenAddContact}
                                        ></AddNewContact>
                                    </div>
                                    <Search></Search>
                                    <AllChats></AllChats>
                                </div>
                            </>
                    }
                </>
            }

            {
                // add requests section
                activeRoute === "add-requests" &&
                <AddRequests></AddRequests>
            }



            {/* userInfo Box */}
            <div tabIndex="1" className={`fixed shadow-xl transition-all duration-500 ${openUserInfo ? "bottom-0 " : "-bottom-[500px]"}`}>
                <UserInfo
                    openUserInfo={openUserInfo}
                    setOpenUserInfo={setOpenUserInfo}
                ></UserInfo>
            </div>



        </div >
    );
};

export default Mobile;