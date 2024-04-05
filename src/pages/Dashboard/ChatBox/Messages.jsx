import SingleMessage from "./SingleMessage";

const Messages = () => {
    const messages = [
        {
            user: true,
        },
        {
            user: false,
        },
        {
            user: true,
        },
        {
            user: true,
        },
        {
            user: false,
        },
        {
            user: true,
        },
        {
            user: true,
        },
        {
            user: false,
        },
        {
            user: true,
        },
        {
            user: true,
        },
        {
            user: false,
        },
        
       
    ]
    return (
        <div className="h-full flex flex-col justify-end">
            <div className="space-y-4 overflow-y-auto no-scrollbar pb-4">
                {
                    messages?.map(message =>
                        <SingleMessage
                            key={message}
                            message={message}
                        >
                        </SingleMessage>)
                }
            </div>
        </div>
    );
};

export default Messages;