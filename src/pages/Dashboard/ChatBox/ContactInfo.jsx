/* eslint-disable react/prop-types */

import useUser from "../../../hooks/useUser";

const ContactInfo = ({ contact, setOpenContactInfo }) => {
    const { data: userData } = useUser(contact)

    const handleBlur = (e) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                // You can invoke a callback or add custom logic here
                setOpenContactInfo(false)
            }
        }, 0);
    };



    return (
        <div
            tabIndex="1"
            onBlur={handleBlur}
            className={`bg-[#FFF] z-40 shadow-xl rounded-r-lg w-80 h-fit flex flex-col p-5`}>
            <div className=" flex-grow">
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
                <p className="text-lg font-bold mt-3">{userData?.name}</p>

                {/* about */}
                <p className="text-gray-700 mt-3">About</p>
                {
                    userData?.about ?
                    <p className="text-sm font-semibold">{userData?.about}</p>
                    :
                    <p className="text-sm mt-1 font-semibold">Not given</p>
                }

                {/* phone number */}
                <p className="text-gray-700 mt-3">Phone number</p>
                {
                    userData?.phone ?
                    <p className="text-sm font-semibold">{userData?.phone}</p>
                    :
                    <p className="text-sm mt-1 font-semibold">Not given</p>
                }
            </div>
        </div>
    );
};

export default ContactInfo;