import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
    return (
        <div className="flex items-center gap-2 border border-gray-500 rounded-xl pl-4">
            <span>
                <IoSearchOutline className="text-lg text-slate-500"></IoSearchOutline>
            </span>
            <input type="text" className="w-full  rounded-r-xl pl-2 py-2" 
            placeholder="Search" />
        </div>
    );
};

export default Search;