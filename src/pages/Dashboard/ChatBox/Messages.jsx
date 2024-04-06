/* eslint-disable react/prop-types */
import SingleMessage from "./SingleMessage";

const Messages = ({messages, refetch}) => {
    // console.log("messages", messages);

    return (
        <div className="h-full flex flex-col justify-end">
            <div className="space-y-4 overflow-y-auto no-scrollbar pb-4">
                {
                    messages?.map(message =>
                        <SingleMessage
                            key={message._id}
                            message={message}
                            refetch={refetch}
                        >
                        </SingleMessage>)
                }
            </div>
        </div>
    );
};

export default Messages;