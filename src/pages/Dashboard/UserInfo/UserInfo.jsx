/* eslint-disable react/prop-types */

import useAuth from "../../../hooks/useAuth";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";


const UserInfo = ({ openUserInfo, setOpenUserInfo }) => {
    const { logOut, user } = useAuth();
    const { data: userData } = useUser(user?.email)

    const handleLogOut = () => {
        console.log("out");
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
                toast.success('User logged out!!')
            }
        });
    }
    return (
        <div className={`bg-[#FFF] z-40 shadow-xl rounded-r-lg w-[425px] h-[475px] flex flex-col`}>
            <div className=" flex-grow py-4 px-10">
                {/* user image */}
                {
                    userData?.image ?
                        <img
                            className="w-32 h-32 rounded-full"
                            src={userData?.image}
                            alt="profile"
                        />
                        :
                        <img
                            className="w-32 h-32 rounded-full"
                            src="https://a0.anyrgb.com/pngimg/1912/680/icon-user-profile-avatar-ico-facebook-user-head-black-icons-circle-thumbnail.png"
                            alt="profile"
                        />
                }

                {/* user name */}
                <div className="flex w-full justify-between mt-4">
                    <p className="text-lg font-bold">Al-amin Rahim</p>
                    <button className="p-2 hover:bg-gray-200 rounded-lg text-gray-700">
                        <MdOutlineModeEdit></MdOutlineModeEdit>
                    </button>
                </div>
                {/* about */}
                <div>
                    <p className="text-gray-700 mt-3">About</p>

                    <div className="flex w-full justify-between mt-1">
                        <p className="text-sm w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ut!</p>
                        <button className="p-2 w-fit h-fit hover:bg-gray-200 rounded-lg text-gray-700">
                            <MdOutlineModeEdit></MdOutlineModeEdit>
                        </button>
                    </div>
                </div>
                {/* phone number */}
                <div>
                    <p className="text-gray-700 mt-3">Phone number</p>

                    <div className="flex w-full justify-between mt-1">
                        <p className="text-sm w-3/4">01991981115</p>
                        <button className="p-2 w-fit h-fit hover:bg-gray-200 rounded-lg text-gray-700">
                            <MdOutlineModeEdit></MdOutlineModeEdit>
                        </button>
                    </div>
                </div>

                {/* log out button */}
                <button className="w-fit text-sm py-2 px-8 shadow-md border hover:bg-gray-200 rounded-l-lg mt-4 flex gap-2 items-center font-semibold"
                    onClick={handleLogOut}>
                    <RiLogoutBoxLine className="text-lg"></RiLogoutBoxLine>
                    <span>Log out</span>
                </button>
            </div>

            {/* go back button */}
            <button className="w-fit py-2 px-4 hover:bg-gray-200 rounded-r-lg mb-2 flex gap-1 items-center font-semibold"
                onClick={() => setOpenUserInfo(!openUserInfo)}>
                <IoChevronBackOutline className="text-xl"></IoChevronBackOutline>
                <span>back</span>
            </button>
        </div>
    );
};

export default UserInfo;