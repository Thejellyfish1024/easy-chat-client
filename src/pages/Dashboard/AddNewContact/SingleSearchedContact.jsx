/* eslint-disable react/prop-types */
import { useContext } from "react";
import AssignColorAndStyle from "./AssignColorAndStyle";
import { ConversationContext } from "../../../provider/ConversationProvider";
import { FaCheck } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import toast from 'react-hot-toast';
import useUser from "../../../hooks/useUser";

const SingleSearchedContact = ({ contact }) => {
  const axiosSecure = useAxiosSecure();
  const { myContacts } = useContext(ConversationContext);
  const {user} = useAuth();
  const {refetch} = useUser(user?.email);
  // console.log(myContacts);
  const isExist = myContacts?.find(singleContact => singleContact === contact?.email)

  const handleAddContact = async () => {
    const res = await axiosSecure.post("/add-contact", {newContact : contact?.email , currentUser : user?.email})
    console.log(res?.data);
    if(res?.data?.update){
      refetch();
      toast.success('Successfully added');
    }
  }


  return (
    <div className="flex items-center space-x-4">
      <AssignColorAndStyle contact={contact} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {contact?.name}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {contact?.email}
        </p>
      </div>
      {
        isExist ?
          // Disable the button if the user is already added
          <p className="pr-4">
            <FaCheck className="text-blue-500"></FaCheck>
          </p>
          :
          <div
            onClick={handleAddContact}
            className={`text-[13px] inline-flex cursor-pointer items-center text-red-600 hover:bg-gray-200 p-2 rounded-md`}>
            +Add
          </div>
      }
    </div>
  );
};

export default SingleSearchedContact;