import { Toaster } from "react-hot-toast";
import Developer from "../../pages/Dashboard/Developer/Developer";
import { Outlet } from "react-router-dom";


const Main = () => {
    const loading = false;
    return (
        <div>
            {loading && <Developer></Developer>}
            <Outlet></Outlet>
            {/* for showing react hot toast in the overall project */}
            <Toaster />
        </div>
    );
};

export default Main;