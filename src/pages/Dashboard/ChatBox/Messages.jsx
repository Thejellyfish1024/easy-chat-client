import SingleMessage from "./SingleMessage";

const Messages = () => {
    const messages = [
        {
            user: true,
            _id : 1,
        },
        {
            user: false,
            _id : 2
        },
        {
            user: true,
            _id : 3
        },
        {
            user: true,
            _id : 4
        },
        {
            user: false,
            _id : 5
        }
        
       
    ]
    return (
        <div className="h-full flex flex-col justify-end">
            <div className="space-y-4 overflow-y-auto no-scrollbar pb-4">
                {
                    messages?.map(message =>
                        <SingleMessage
                            key={message._id}
                            message={message}
                        >
                        </SingleMessage>)
                }
            </div>
        </div>
    );
};

export default Messages;