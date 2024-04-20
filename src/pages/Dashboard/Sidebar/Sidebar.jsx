/* eslint-disable react/prop-types */
import { BsChatRightFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";


const Sidebar = ({ setOpenUserInfo, activeRoute, setActiveRoute }) => {
    const { user } = useAuth();
    const { setActiveChat } = useContext(ConversationContext);
    const { data: userData } = useUser(user?.email);
    const addRequests = userData?.addRequests;
    return (
        <div className="w-full h-full pt-6 lg:pb-6 pb-4 xl:px-4 lg:px-3 md:px-4 px-1 flex flex-col justify-between bg-[#001d3d] text-gray-400 lg:rounded-2xl">
            <ul className="w-full  space-y-5 flex flex-col items-center">
                {/* all chats */}
                <li
                    onClick={() => {
                        setActiveRoute("all-chats")
                        setActiveChat("")
                    }}
                    className={`md:p-3 p-2 rounded-lg text-white 
                ${activeRoute === "all-chats" ? "bg-[#0077b6]" : "hover:bg-[#0077b6]"}`}>
                    <BsChatRightFill className="text-lg"></BsChatRightFill>
                </li>
                {/* add requests */}
                <li
                    onClick={() => {
                        setActiveRoute("add-requests")
                        setActiveChat("")
                    }}
                    className={`md:p-3 p-2 rounded-lg text-white relative
                ${activeRoute === "add-requests" ? "bg-[#0077b6]" : "hover:bg-[#0077b6]"}`}>
                    <FaUserFriends className="text-2xl"></FaUserFriends>
                    <span className="bg-red-500 px-[7px] py-[2px] font-semibold rounded-full text-[10px] absolute top-1 right-1">{addRequests?.length || 0}</span>
                </li>
                {/*  */}
                <li
                    onClick={() => {
                        setActiveRoute("star")
                        setActiveChat("")
                    }}
                    className={`md:p-3 p-2 rounded-lg text-white 
                ${activeRoute === "star" ? "bg-[#0077b6]" : "hover:bg-[#0077b6]"}`}>
                    <IoMdStar className="text-2xl"></IoMdStar>
                </li>
            </ul>
            <div className="flex w-full items-end justify-center">
                {
                    userData?.image ?
                        <img
                            onClick={() => setOpenUserInfo(true)}
                            src={userData?.image}
                            className="md:w-9 md:h-9 w-7 h-7 rounded-full" alt="profile" />
                        :
                        <img
                            onClick={() => setOpenUserInfo(true)}
                            src="https://a0.anyrgb.com/pngimg/1912/680/icon-user-profile-avatar-ico-facebook-user-head-black-icons-circle-thumbnail.png"
                            className="md:w-9 md:h-9 w-7 h-7 rounded-full" alt="profile" />
                }
            </div>
        </div>
    );
};

export default Sidebar;