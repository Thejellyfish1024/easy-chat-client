/* eslint-disable react/prop-types */
import { BsChatRightFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { FaUser, FaUserFriends } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";


const Sidebar = ({ setOpenUserInfo, activeRoute, setActiveRoute }) => {
    const { user } = useAuth();
    // console.log(user?.email);
    const { data: userData } = useUser(user?.email);
    // console.log(userData);
    return (
        <div className="w-full h-full py-6 xl:px-4 lg:px-3 md:px-4 px-1 flex flex-col justify-between bg-[#001d3d] text-gray-400 lg:rounded-2xl">
            <ul className="w-full  space-y-5 flex flex-col items-center">
                {/* all chats */}
                <li
                    onClick={() => setActiveRoute("all-chats")}
                    className={`md:p-3 p-2 rounded-lg text-white 
                ${activeRoute === "all-chats" ? "bg-[#0077b6]" : "hover:bg-[#0077b6]"}`}>
                    <BsChatRightFill className="text-lg"></BsChatRightFill>
                </li>
                {/* add requests */}
                <li
                    onClick={() => setActiveRoute("add-requests")}
                    className={`md:p-3 p-2 rounded-lg text-white 
                ${activeRoute === "add-requests" ? "bg-[#0077b6]" : "hover:bg-[#0077b6]"}`}>
                    <FaUserFriends className="text-2xl"></FaUserFriends>
                </li>
                {/*  */}
                <li
                    onClick={() => setActiveRoute("star")}
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
                        <button
                            onClick={() => setOpenUserInfo(true)}
                            className="bg-gray-600 p-2 rounded-full text-white">
                            <FaUser className="md:text-xl text-lg"></FaUser>
                        </button>
                }
            </div>
        </div>
    );
};

export default Sidebar;