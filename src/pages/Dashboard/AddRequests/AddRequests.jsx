import SingleRequest from "./SingleRequest";
import logo from "../../../assets/easy-chat-logo.jpg"

const AddRequests = () => {
    const arr = [0, 1, 2, 4]
    return (
        <div className="my-5 space-y-4 w-[510px]">
            <div className="flex gap-2 items-center">
                <img src={logo} className="w-10" alt="" />
                <h3 className="text-xl  font-bold">Chat Requests</h3>
            </div>
            <div className="space-y-4">
                {
                    arr.map(request => <SingleRequest
                        key={request}
                    ></SingleRequest>)
                }
            </div>
        </div>
    );
};

export default AddRequests;