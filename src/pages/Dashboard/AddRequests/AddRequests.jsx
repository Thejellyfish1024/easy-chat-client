import SingleRequest from "./SingleRequest";
import logo from "../../../assets/easy-chat-logo.jpg"
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const AddRequests = () => {
    const { user } = useAuth();
    const { data: userData, refetch } = useUser(user?.email);
    const addRequests = userData?.addRequests;
    return (
        <div className="lg:my-5 px-2 lg:px-0 md:px-3 pt-3 lg:pt-0 space-y-4 w-[510px]">
            <div className="flex gap-2 items-center">
                <img src={logo} className="w-10" alt="" />
                <h3 className="text-xl font-bold">Chat Requests</h3>
            </div>
            {
                addRequests?.length < 1 ?
                    <p className="text-center font-bold pt-8">You have no requests</p>
                    :
                    <div className="space-y-4">
                        {
                            addRequests.map(request => <SingleRequest
                                key={request}
                                request={request}
                                refetch={refetch}
                            ></SingleRequest>)
                        }
                    </div>
            }
        </div>
    );
};

export default AddRequests;