/* eslint-disable react/prop-types */

import { FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import { useContext, useEffect, useRef, useState } from "react";
import { ConversationContext } from "../../../provider/ConversationProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SingleMessage = ({ message, refetch }) => {
    // console.log(message);
    const [openMessageUpdate, setOpenMessageUpdate] = useState(false);
    const { user } = useAuth();
    const { data: userData } = useUser(message?.sender);
    const { scrollRef } = useContext(ConversationContext);
    const messageTime = message?.date?.split(",")[1]?.split(":");
    const modalRef = useRef();
    const axiosSecure = useAxiosSecure();

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                // You can invoke a callback or add custom logic here
                setOpenMessageUpdate(false)
            }
        }, 0);
    };


    useEffect(() => {
        if (openMessageUpdate) {
            // Set focus to the modal when it opens
            modalRef?.current?.focus();
        }
    }, [openMessageUpdate]);

    const handleDeleteMessage = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/delete-message/${message?._id}`)
                // console.log(data);
                if (data?.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div>
            {
                message?.sender === user?.email ?
                    <div className="flex justify-end w-full">
                        <div
                            ref={scrollRef}
                            className="flex justify-end lg:w-3/5 w-4/5">
                            <div className="relative">
                                <p
                                    onDoubleClick={() => setOpenMessageUpdate(true)}
                                    className="bg-blue-500 text-gray-200 md:py-2 md:px-4 w-fit px-2 py-1  rounded-lg">{message?.message}</p>
                                <p className="text-right pr-4 text-gray-500 text-[10px] lg:text-[12px] mt-1">
                                    {
                                        messageTime ?
                                            <>
                                                {messageTime[0]}:{messageTime[1]}
                                            </>
                                            :
                                            <>
                                                0:00
                                            </>
                                    }
                                </p>
                                {
                                    openMessageUpdate &&
                                    <div
                                        ref={modalRef}
                                        tabIndex="1"
                                        onBlur={handleBlur}
                                        className={`bg-[#FFF] z-40 shadow-xl rounded-md  h-fit flex flex-col absolute -left-20 top-10`}>
                                        <button
                                            onClick={handleDeleteMessage}
                                            className="border-b px-5 py-1 hover:bg-gray-100 rounded-x-md rounded-t-md">
                                            Delete</button>
                                        <button className="border-b px-5 py-1 hover:bg-gray-100 rounded-x-md rounded-b-md">Edit</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div
                        ref={scrollRef}
                        className="flex md:gap-4 gap-2 items-end">
                        {
                            userData?.image ?
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src={userData?.image}
                                    alt="profile" />
                                :
                                <p className="bg-gray-300 w-fit h-fit p-2 rounded-full text-white">
                                    <FaUser className="text-sm md:text-base"></FaUser>
                                </p>
                        }
                        <div className="lg:w-3/5 w-4/5">
                            <p className="bg-[#FFF] md:py-2 md:px-4 w-fit px-2 py-1 rounded-lg">{message?.message}</p>
                            <p className="mt-1 pl-4 text-gray-500 text-[10px] lg:text-[12px]">
                                {
                                    messageTime ?
                                        <>
                                            {messageTime[0]}:{messageTime[1]}
                                        </>
                                        :
                                        <>
                                            0:00
                                        </>
                                }
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleMessage;