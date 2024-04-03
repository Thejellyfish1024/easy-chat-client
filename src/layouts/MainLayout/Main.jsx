import { Toaster } from "react-hot-toast";
import Developer from "../../pages/Dashboard/Developer/Developer";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Main = () => {
    const { preLoading} = useAuth();
    return (
        <div>
            {preLoading && <Developer></Developer>}
            <Outlet></Outlet>
            {/* for showing react hot toast in the overall project */}
            <Toaster />
        </div>
    );
};

export default Main;