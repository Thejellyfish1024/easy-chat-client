/* eslint-disable react/prop-types */
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import toast from "react-hot-toast";

const CommonUpdateField = ({inputRef, setEditUserName}) => {
    const {user} = useAuth();
    const { data: userData, refetch } = useUser(user?.email)
    const axiosSecure = useAxiosSecure();
    
    const handleSave = (ref, updateAPI) => {
        const updatedSection = ref?.current?.value;
        console.log(updatedSection);
        if (updatedSection === "") {
            return toast.error(`Field can not be empty!`)
        }
        console.log(updatedSection);

        axiosSecure?.put(`/${updateAPI}/${user?.email}`, { updatedSection })
            .then(res => {
                console.log(res?.data);
                if (res?.data?.modifiedCount) {
                    refetch();
                    setEditUserName(false);
                }
            })
    }
    return (
        <div>
            <input type="text"
                ref={inputRef}
                id="inputBox"
                defaultValue={userData?.name}
                className="bg-[#D9D9D980] text-gray-800 w-full py-1 pl-4 border-none rounded-lg" />
            <div className="mt-2">
                <button onClick={() => handleSave(inputRef, 'update-user-name')} className="ml-1 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">Save</button>

                <button onClick={() => setEditUserName(false)} className="ml-3 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300  ">Cancel</button>
            </div>
        </div>
    );
};

export default CommonUpdateField;