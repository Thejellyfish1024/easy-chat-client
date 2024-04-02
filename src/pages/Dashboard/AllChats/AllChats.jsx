import SingleChat from "./SingleChat";

const AllChats = () => {
    const allChats = [1,2,3,4]
    return (
        <div>
            <div className="flex flex-col gap-6">
                {
                    allChats?.map(chat => <SingleChat key={chat}></SingleChat>)
                }
            </div>
        </div>
    );
};

export default AllChats;