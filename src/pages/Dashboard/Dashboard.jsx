// import { Outlet } from "react-router-dom";
import AllChats from "./AllChats/AllChats";
import ChatBox from "./ChatBox/ChatBox";
import Search from "./Search/Search";
import Sidebar from "./Sidebar/Sidebar";
// import Developer from "./Developer/Developer";

const Dashboard = () => {
    return (
        <div className="flex gap-6 p-3 min-h-screen bg-[#FFF] rounded-md">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className="w-[500px] space-y-8 pt-6">
                <Search></Search>
                <AllChats></AllChats>
            </div>
            <div className="w-full">
                {/* {
                location?.pathname === "/" ? <Developer></Developer> : <Outlet />
            } */}
                <ChatBox></ChatBox>
            </div>
            
        </div>
    );
};

export default Dashboard;