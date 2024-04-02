import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex gap-6 p-5 bg-[#FFF] rounded-md">
            <div className="w-52 h-screen">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full bg-red-500 h-screen">kk</div>
            <div className="w-full bg-blue-600 h-screen">kk</div>
        </div>
    );
};

export default Dashboard;