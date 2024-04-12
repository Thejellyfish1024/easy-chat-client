/* eslint-disable react/prop-types */

import useAuth from "../../../hooks/useAuth";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";
import { useRef, useState } from "react";
import CommonUpdateField from "./CommonUpdateField";


const UserInfo = ({ openUserInfo, setOpenUserInfo }) => {
    const { logOut, user } = useAuth();
    const { data: userData } = useUser(user?.email)
    const [editUserName, setEditUserName] = useState(false);
    const nameRef = useRef();

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

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                // You can invoke a callback or add custom logic here
                setOpenUserInfo(false)
            }
        }, 0);
    };

    const handleEdit = (ref) => {
        setEditUserName(true);
        setTimeout(() => {
            handleFocus(ref)
        }, 0);
    }

    const handleFocus = (ref) => {
        ref?.current?.focus();
    }



    return (
        <div
            tabIndex="1"
            onBlur={handleBlur}
            className={`bg-[#FFF] z-40 shadow-xl rounded-r-lg md:w-[425px] h-[475px] flex flex-col`}>
            <div className=" flex-grow py-4 md:px-10 px-5">
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
                {
                    editUserName ?
                        <CommonUpdateField
                            inputRef={nameRef}
                            setEditUserName={setEditUserName}
                        >
                        </CommonUpdateField>
                        :
                        <div className="flex w-full justify-between mt-4">
                            <p className="text-lg font-bold">{userData?.name}</p>
                            <button onClick={() => handleEdit(nameRef)} className="p-2 hover:bg-gray-200 rounded-lg text-gray-700">
                                <MdOutlineModeEdit></MdOutlineModeEdit>
                            </button>
                        </div>
                }

                {/* about */}
                <div>
                    <p className="text-gray-700 mt-3">About</p>

                    <div className="flex w-full justify-between mt-1">
                        {
                            userData?.about ?
                                <p className="text-sm font-semibold w-3/4">{userData?.about}</p>
                                :
                                <p className="text-sm text-slate-600 font-semibold w-3/4">Write something about you</p>
                        }
                        <button className="p-2 w-fit h-fit hover:bg-gray-200 rounded-lg text-gray-700">
                            <MdOutlineModeEdit></MdOutlineModeEdit>
                        </button>
                    </div>
                </div>
                {/* phone number */}
                <div>
                    <p className="text-gray-700 mt-3">Phone number</p>

                    <div className="flex w-full justify-between mt-1">
                        {
                            userData?.phone ?
                                <p className="text-sm font-semibold w-3/4">{userData?.phone}</p>
                                :
                                <p className="text-sm text-slate-600 font-semibold w-3/4">Add your phone number</p>
                        }
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

// {
//     openEditInput ?
//         <div>
//             <input type="text" defaultValue={comment?.comment}
//                 ref={inputRef}
//                 id="inputBox"
//                 className="bg-[#D9D9D980] text-gray-800 w-full py-4 pl-4 border-none rounded-lg" />
//             <div className="mt-2">
//                 <button onClick={handleSaveChanges} className="ml-1 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">Save Changes</button>

//                 <button onClick={() => setOpenEditInput(false)} className="ml-3 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300  ">Cancel</button>
//             </div>
//         </div>
//         :
//         <p className="bg-[#D9D9D980] text-gray-800 w-full py-2 pl-4 border-none rounded-lg">{comment?.comment}</p>
// }