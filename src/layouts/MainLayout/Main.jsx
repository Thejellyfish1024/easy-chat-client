import { Toaster } from "react-hot-toast";
import Desktop from "../Desktop/Desktop";


const Main = () => {
    return (
        <div>
            <div>
                <Desktop></Desktop>
            </div>
            
            {/* for showing react hot toast in the overall project */}
            <Toaster />
        </div>
    );
};

export default Main;