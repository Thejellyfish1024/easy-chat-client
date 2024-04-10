/* eslint-disable react/prop-types */
import { BsChatRightFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { FaUser, FaUserFriends } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";


const Sidebar = ({ setOpenUserInfo }) => {
    const { user } = useAuth();
    // console.log(user?.email);
    const { data: userData } = useUser(user?.email);
    // console.log(userData);
    return (
        <div className="w-full h-full py-6 xl:px-4 lg:px-3 md:px-4 px-1 flex flex-col justify-between bg-[#001d3d] text-gray-400 lg:rounded-2xl">
            <ul className="w-full  space-y-5 flex flex-col items-center">
                <li className="md:p-3 p-2 rounded-lg bg-[#0077b6] text-white">
                    <BsChatRightFill className="text-lg"></BsChatRightFill>
                </li>
                <li className="md:p-3 p-2 rounded-lg hover:bg-[#0077b6] hover:text-white">
                    <FaUserFriends className="text-2xl"></FaUserFriends>
                </li>
                <li className="md:p-3 p-2 rounded-lg hover:bg-[#0077b6] hover:text-white">
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