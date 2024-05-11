/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { MdOutlineCancel } from "react-icons/md";
import SingleSearchedContact from "./SingleSearchedContact";
import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddNewContact = ({ openAddContact, setOpenAddContact }) => {
    const [searchedContacts, setSearchedContacts] = useState([]);
    const [openSuggestions, setOpenSuggestions] = useState(false)
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const modalRef = useRef();



    const handleInputChange = async (e) => {
        let query = e?.target?.value;
        console.log("query", query);

        if (query === "") {
            setOpenSuggestions(false);
        }
        if (query) {
            setOpenSuggestions(true);
        }

        const res = await axiosSecure.get(`/users/search?query=${query}&&email=${user?.email}`);
        // console.log(res?.data);
        setSearchedContacts(res?.data?.data);
    };

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                // You can invoke a callback or add custom logic here
                setTimeout(() => {
                    setOpenAddContact(false)
                }, 100);
            }
        }, 0);
    };

    useEffect(() => {
        if (openAddContact) {
            // Set focus to the modal when it opens
            modalRef?.current?.focus();
        }
    }, [openAddContact]);

    return (
        <div
            ref={modalRef}
            tabIndex="1"
            onBlur={handleBlur}
            className={`bg-[#FFF] z-40 shadow-2xl border rounded-lg md:w-80 w-72 md:h-[540px] h-[450px] flex flex-col px-5 pt-5`}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">New Contact</h3>
                <button type="button" className="text-red-500" onClick={() => setOpenAddContact(false)}>
                    <MdOutlineCancel className="text-2xl"></MdOutlineCancel>
                </button>
            </div>
            {/* search box for contacts */}
            <input
                onChange={(e) => handleInputChange(e)}
                type="text"
                className="mt-3 py-1 px-4 outline-none rounded-md border border-gray-200 border-b-2 border-b-blue-500"
                placeholder="Search name or email" />

            {/* Searched Contacts */}
            {
                openSuggestions &&

                <>
                    {
                        searchedContacts?.length > 0 ?

                            <div className="space-y-3 mt-4 overflow-auto no-scrollbar">
                                {
                                    searchedContacts?.map(contact => <SingleSearchedContact
                                        key={contact}
                                        contact={contact}
                                    ></SingleSearchedContact>)
                                }
                            </div>
                            :
                            <p className="font-semibold mt-3">We couldn't find anything matching your search</p>
                    }
                </>
            }

        </div>
    );
};

export default AddNewContact;