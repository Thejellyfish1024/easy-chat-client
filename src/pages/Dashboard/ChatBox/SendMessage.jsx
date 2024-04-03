import { FaArrowUp } from "react-icons/fa";
const SendMessage = () => {
    return (
        <div className="flex gap-2">
            <input type="text" name="" id=""
                className="w-full border py-2 px-6 bg-[#FFF] rounded-lg"
                placeholder="Message..." />
            <button className="bg-blue-500 px-3 py-1 text-white rounded-lg">
                <FaArrowUp></FaArrowUp>
            </button>
        </div>
    );
};

export default SendMessage;