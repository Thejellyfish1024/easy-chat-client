/* eslint-disable react/prop-types */

import useAuth from "../../../hooks/useAuth";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUser from "../../../hooks/useUser";
import { useEffect, useRef, useState } from "react";
import CommonUpdateField from "./CommonUpdateField";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UserInfo = ({ openUserInfo, setOpenUserInfo }) => {
    const { logOut, user } = useAuth();
    const { data: userData, refetch } = useUser(user?.email)
    const [editUserName, setEditUserName] = useState(false);
    const [editAbout, setEditAbout] = useState(false);
    const [editNumber, setEditNumber] = useState(false);
    const nameRef = useRef();
    const aboutRef = useRef();
    const phoneRef = useRef();
    const modalRef = useRef(null);
    const inputFile = useRef(null);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

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

    const handleEdit = (ref, setEditInfo) => {
        setEditInfo(true);
        setTimeout(() => {
            handleFocus(ref)
        }, 0);
    }

    const handleFocus = (ref) => {
        ref?.current?.focus();
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


    useEffect(() => {
        if (openUserInfo) {
            // Set focus to the modal when it opens
            modalRef?.current?.focus();
        }
    }, [openUserInfo]);


    const handleUpdateImage = async() => {
        // `current` points to the mounted file input element
        inputFile.current.click();
        const imgFile = inputFile.current.files[0];

        // console.log('img file', imgFile);
        if (imgFile) {
            const imageFile = { image: imgFile };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            const image = res?.data?.data?.url;
            // console.log(image);
            const { data } = await axiosSecure.put(`/users/update-user/${user?.email}`, { image });
            // console.log('image update', data);

            if (data?.update) {
                refetch();
                toast.success('Profile updated');
            }
        }
    };

    return (
        <div
            ref={modalRef}
            tabIndex="-1"
            onBlur={handleBlur}
            className={`bg-[#FFF] z-40  rounded-r-lg md:w-[425px] w-80 h-[475px] flex flex-col`}>
            <div className=" flex-grow py-4 md:px-10 px-5">
                {/* user image */}
                <div className="relative w-fit">
                    {
                        userData?.image ?
                            <img
                                className="md:w-32 md:h-32 w-24 h-24 rounded-full object-cover"
                                src={userData?.image}
                                alt="profile"
                            />
                            :
                            <img
                                className="md:w-32 md:h-32 w-24 h-24  rounded-full"
                                src="https://a0.anyrgb.com/pngimg/1912/680/icon-user-profile-avatar-ico-facebook-user-head-black-icons-circle-thumbnail.png"
                                alt="profile"
                            />
                    }
                    <button
                        onClick={handleUpdateImage}
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full  absolute bottom-1 right-1">
                        <MdOutlineModeEdit className="text-sm"></MdOutlineModeEdit>
                        <input
                            type="file"
                            id="file"
                            ref={inputFile}
                            style={{ display: "none" }}
                            onChange={handleUpdateImage}
                        />
                    </button>
                </div>

                {/* user name */}
                {
                    editUserName ?
                        <CommonUpdateField
                            modalRef={modalRef}
                            inputRef={nameRef}
                            field = "name"
                            setEditInfo={setEditUserName}
                            defaultValue={userData?.name}
                        >
                        </CommonUpdateField>
                        :
                        <div className="flex w-full justify-between mt-4">
                            <p className="md:text-lg font-bold">{userData?.name}</p>
                            <button onClick={() => handleEdit(nameRef, setEditUserName)} className="p-2 hover:bg-gray-200 rounded-lg text-gray-700">
                                <MdOutlineModeEdit></MdOutlineModeEdit>
                            </button>
                        </div>
                }

                {/* about */}
                <div>
                    <p className="text-gray-700 mt-3">About</p>
                    {
                        editAbout ?
                            <CommonUpdateField
                                modalRef={modalRef}
                                inputRef={aboutRef}
                                field = "about"
                                setEditInfo={setEditAbout}
                                defaultValue={userData?.about}
                            >
                            </CommonUpdateField>
                            :
                            <div className="flex w-full justify-between mt-1">
                                {
                                    userData?.about ?
                                        <p className="text-sm  w-3/4">{userData?.about}</p>
                                        :
                                        <p className="text-sm text-slate-600 font-semibold w-3/4">Write something about you</p>
                                }
                                <button onClick={() => handleEdit(aboutRef, setEditAbout)} className="p-2 w-fit h-fit hover:bg-gray-200 rounded-lg text-gray-700">
                                    <MdOutlineModeEdit></MdOutlineModeEdit>
                                </button>
                            </div>
                    }
                </div>

                {/* phone number */}
                <div>
                    <p className="text-gray-700 mt-3">Phone number</p>

                    {
                        editNumber ?
                            <CommonUpdateField
                                modalRef={modalRef}
                                inputRef={phoneRef}
                                field = "phone"
                                setEditInfo={setEditNumber}
                                defaultValue={userData?.phone}
                            >
                            </CommonUpdateField>
                            :
                            <div className="flex w-full justify-between mt-1">
                                {
                                    userData?.phone ?
                                        <p className="text-sm w-3/4">{userData?.phone}</p>
                                        :
                                        <p className="text-sm text-slate-600 font-semibold w-3/4">Add your phone number</p>
                                }
                                <button onClick={() => handleEdit(phoneRef, setEditNumber)} className="p-2 w-fit h-fit hover:bg-gray-200 rounded-lg text-gray-700">
                                    <MdOutlineModeEdit></MdOutlineModeEdit>
                                </button>
                            </div>
                    }
                </div>

                {/* log out button */}
                <button className="w-fit text-sm py-2 px-8 shadow-md border bg-gray-200 hover:bg-gray-300 rounded-l-lg mt-4 flex gap-2 items-center font-semibold"
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