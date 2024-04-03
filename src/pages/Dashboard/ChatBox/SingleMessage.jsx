/* eslint-disable react/prop-types */

import { FaUser } from "react-icons/fa";

const SingleMessage = ({ message }) => {
    return (
        <div>
            {
                message?.user ?
                    <div className="flex justify-end w-full">
                        <div>
                            <p className="bg-blue-500 text-gray-200 py-2 px-4 rounded-lg w-fit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus magni est dicta dolor! Quidem!</p>
                            <p className="text-right pr-4 text-gray-500 text-xs mt-1">3:45</p>
                        </div>
                    </div>
                    :
                    <div className="flex gap-4 items-end">
                        <p className="bg-gray-300 w-fit h-fit p-2 rounded-full text-white">
                            <FaUser></FaUser>
                        </p>
                        <div>
                        <p className="bg-[#FFF] py-2 px-4 rounded-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, tempora! Impedit, eligendi mollitia? Nesciunt</p>
                        <p className="mt-1 pl-4 text-gray-500 text-xs">3:45</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleMessage;