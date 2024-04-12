import SingleRequest from "./SingleRequest";

const AddRequests = () => {
    const arr = [0, 1, 2, 4]
    return (
        <div className="w-[510px] space-y-4 mt-4">
            {
                arr.map(request => <SingleRequest
                    key={request}
                ></SingleRequest>)
            }
        </div>
    );
};

export default AddRequests;