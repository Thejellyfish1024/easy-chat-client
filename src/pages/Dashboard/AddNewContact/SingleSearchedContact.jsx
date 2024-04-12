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
  const { user } = useAuth();
  const { refetch } = useUser(user?.email);
  const {data : contactData, refetch : contactRefetch} = useUser(contact?.email);
  // console.log(contact);
  const isExistedContact = myContacts?.find(singleContact => singleContact === contact?.email)
  const isExistedRequest = contactData?.addRequests?.find(singleRequest => singleRequest === user?.email)
  // console.log(isExistedRequest);

  // const handleAddContact = async () => {
  //   const res = await axiosSecure.post("/add-contact", {newContact : contact?.email , currentUser : user?.email})
  //   console.log(res?.data);
  //   if(res?.data?.update){
  //     refetch();
  //     toast.success('Successfully added');
  //   }
  // }

  const handleRequestContact = async () => {
    const res = await axiosSecure.put(`/contact-request`, { requestFrom: user?.email, requestTo: contact?.email })
    // console.log(res?.data);
    if (res?.data?.update) {
      refetch();
      contactRefetch();
      toast.success('Request sent successfully');
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
        isExistedContact || isExistedRequest ?
          // Disable the button if the user is already added
          <>
            {
              isExistedContact &&
              <p className="pr-4">
                <FaCheck className="text-blue-500"></FaCheck>
              </p>
            }
            {
              isExistedRequest &&
              <p className=" text-[13px] text-red-500">
                Pending
              </p>
            }
          </>
          :
          <div
            onClick={handleRequestContact}
            className={`text-[13px] inline-flex cursor-pointer items-center text-red-600 hover:bg-gray-200 p-2 rounded-md`}>
            +Add
          </div>
      }
    </div>
  );
};

export default SingleSearchedContact;