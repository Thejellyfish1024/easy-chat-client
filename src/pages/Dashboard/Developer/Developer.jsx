import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Developer = () => {
    const loading = true;
    return (
        <div className="w-full fixed z-50 h-screen bg-white">
            <div className="flex flex-col h-screen justify-center items-center">
                <h3 className="text-center font-medium mt-2 text-gray-500">@Developed by <Link className="hover:text-black hover:underline" target="_blank" to="https://webdevshihab.netlify.app/">Mohammad Rahim</Link></h3>
            </div>

            <div className="absolute bottom-0 w-full p-5">
                {/* Loading spinner */}
                <div className="flex justify-center items-center flex-col">
                    <BeatLoader
                        color={"blue"}
                        loading={loading}
                        cssOverride={override}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <p className="text-xs font-medium">Gathering resources</p>

                    <p className="text-xs font-semibold mt-5">v1.0</p>
                </div>
            </div>
        </div>
    );
};

export default Developer;