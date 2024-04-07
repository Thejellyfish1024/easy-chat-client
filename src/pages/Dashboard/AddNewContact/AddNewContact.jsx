import { MdOutlineCancel } from "react-icons/md";
import SingleSearchedContact from "./SingleSearchedContact";

const AddNewContact = () => {
    const searchedContacts = [
        {
            name : "rahim",
        },
        {
            name : "jumman",
        },
        {
            name : "sohag",
        },
        {
            name : "mama",
        },
        {
            name : "mama",
        },
        {
            name : "mama",
        },
        {
            name : "mama",
        },
        {
            name : "mama",
        },
        {
            name : "mama",
        },
    ]
    return (
        <div className={`bg-[#FFF] z-40 shadow-2xl border rounded-lg w-80 h-[540px] flex flex-col px-5 pt-5`}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">New Contact</h3>
                <button type="button" className="text-red-500">
                    <MdOutlineCancel className="text-2xl"></MdOutlineCancel>
                </button>
            </div>
            {/* search box for contacts */}
            <input type="text" className="mt-3 py-1 px-4 rounded-md border border-gray-200 border-b-2 border-b-blue-500" placeholder="Search name or email" />

            {/* Searched Contacts */}
            <div className="space-y-3 mt-4 overflow-auto no-scrollbar">
                {
                    searchedContacts?.map(contact => <SingleSearchedContact
                        key={contact}
                        contact={contact}
                    ></SingleSearchedContact>)
                }
            </div>
        </div>
    );
};

export default AddNewContact;