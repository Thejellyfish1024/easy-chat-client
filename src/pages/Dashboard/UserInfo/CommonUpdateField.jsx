/* eslint-disable react/prop-types */
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import toast from "react-hot-toast";

const CommonUpdateField = ({inputRef, setEditInfo, updateAPI, defaultValue, modalRef }) => {
    const {user} = useAuth();
    const { refetch } = useUser(user?.email)
    const axiosSecure = useAxiosSecure();
    
    const handleSave = (ref) => {
        const updatedSection = ref?.current?.value;
        console.log(updatedSection);
        if (updatedSection === "") {
            return toast.error(`Field can not be empty!`)
        }
        // console.log(updatedSection);

        axiosSecure?.put(`/${updateAPI}/${user?.email}`, { updatedSection })
            .then(res => {
                // console.log(res?.data);
                if (res?.data?.modifiedCount) {
                    refetch();
                    setEditInfo(false);
                }
            })
    }

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                // You can invoke a callback or add custom logic here
                setEditInfo(false)
            }
        }, 0);
    };

    return (
        <div tabIndex="1" onBlur={handleBlur}>
            <input type="text"
                ref={inputRef}
                id="inputBox"
                defaultValue={defaultValue}
                className="bg-[#D9D9D980] text-gray-800 outline-none w-full py-1 pl-4 border-none rounded-lg" />
            <div className="mt-2">
                <button onClick={() => handleSave(inputRef)} className="ml-1 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">Save</button>

                <button onClick={() => {
                    setEditInfo(false)
                    modalRef?.current?.focus();
                }} className="ml-3 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300  ">Cancel</button>
            </div>
        </div>
    );
};

export default CommonUpdateField;