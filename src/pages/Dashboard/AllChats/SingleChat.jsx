import { FaUser } from "react-icons/fa";

const SingleChat = () => {
    return (
        <div className="w-full bg-gray-200 p-4 rounded-xl flex gap-4 items-center">
            <p className="bg-gray-300 w-fit h-fit p-4 rounded-full text-white">
                <FaUser className="text-2xl"></FaUser>
            </p>
            <div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">sinthi poti</p>
                    <p className="text-xs font-semibold text-slate-600">03/30/2024</p>
                </div>
                <p className="text-slate-600 pr-4">Lorem ipsum dolor sit, amet kjss adipisicing elit.</p>
            </div>
        </div>
    );
};

export default SingleChat;