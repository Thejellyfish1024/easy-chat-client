import AllChats from "./AllChats/AllChats";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex gap-6 p-3 min-h-screen bg-[#FFF] rounded-md">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className="w-[475px] space-y-8 py-6">
                <Search></Search>
                <AllChats></AllChats>
            </div>
            <div className="w-full bg-blue-600">kk</div>
        </div>
    );
};

export default Dashboard;