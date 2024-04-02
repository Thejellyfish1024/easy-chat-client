import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
    return (
        <div className="flex items-center gap-2 border border-gray-500 rounded-xl py-2 px-4">
            <span>
                <IoSearchOutline className="text-lg text-slate-500"></IoSearchOutline>
            </span>
            <input type="text" className="w-full" 
            placeholder="Search" />
        </div>
    );
};

export default Search;