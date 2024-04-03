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
    ]
    return (
        <div>
            {
                messages?.map(message => <SingleMessage key={message}></SingleMessage>)
            }
        </div>
    );
};

export default Messages;