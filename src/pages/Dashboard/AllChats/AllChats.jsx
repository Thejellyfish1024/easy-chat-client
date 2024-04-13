/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import SingleChat from "./SingleChat";
import { ConversationContext } from "../../../provider/ConversationProvider";

const AllChats = () => {
    const { myContacts } = useContext(ConversationContext);
    // console.log(myContacts);
    return (
        <div>
            {
                myContacts?.length > 0 ?
                    <div className="flex flex-col gap-5 max-h-[78vh] overflow-y-auto no-scrollbar">
                        {
                            myContacts?.map(contact => <SingleChat key={contact} contact={contact}></SingleChat>)
                        }
                    </div>
                    :
                    <p className="text-center font-bold mt-10">You haven't made any contacts yet</p>
            }
        </div>
    );
};

export default AllChats;