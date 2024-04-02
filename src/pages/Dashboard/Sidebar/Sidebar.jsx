import { BsChatRightFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";


const Sidebar = () => {
    return (
        <div className="w-full bg-[#001d3d] h-screen text-gray-400 rounded-2xl">
            <ul className="w-full pt-8 space-y-5 flex flex-col items-center">
                <li className="p-3 rounded-lg bg-[#0077b6] text-white">
                    <BsChatRightFill className="text-xl"></BsChatRightFill>
                </li>
                <li className="p-3 rounded-lg hover:bg-[#0077b6] hover:text-white">
                    <IoMdStar className="text-2xl"></IoMdStar>
                </li>
                <li className="p-3 rounded-lg hover:bg-[#0077b6] hover:text-white">
                    <IoMdStar className="text-2xl"></IoMdStar>
                </li>
                <li className="p-3 rounded-lg hover:bg-[#0077b6] hover:text-white">
                    <IoMdStar className="text-2xl"></IoMdStar>
                </li>
                <li className="p-3 rounded-lg hover:bg-[#0077b6] hover:text-white">
                    <IoMdStar className="text-2xl"></IoMdStar>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;