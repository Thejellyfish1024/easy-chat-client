import { useContext } from "react";
import SingleChat from "./SingleChat";
import { ConversationContext } from "../../../provider/ConversationProvider";

const AllChats = () => {
    const {myContacts} = useContext(ConversationContext);
    // console.log(myContacts);
    return (
        <div>
            <div className="flex flex-col gap-5 max-h-[78vh] overflow-y-auto no-scrollbar">
                {
                    myContacts?.map(contact => <SingleChat key={contact} contact={contact}></SingleChat>)
                }
            </div>
        </div>
    );
};

export default AllChats;