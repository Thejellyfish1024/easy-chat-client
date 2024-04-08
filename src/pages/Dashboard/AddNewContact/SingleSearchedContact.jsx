/* eslint-disable react/prop-types */
import AssignColorAndStyle from "./AssignColorAndStyle";


const SingleSearchedContact = ({contact}) => {
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
          <div
            
            className={`text-[13px] inline-flex cursor-pointer items-center 
                ? "text-red-600 cursor-not-allowed"
                : "text-gray-900"
              }`}
            // Disable the button if the user is already added
            
          >
            +Add
          </div>
      </div>
    );
};

export default SingleSearchedContact;