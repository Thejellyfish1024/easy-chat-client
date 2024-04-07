import SingleChat from "./SingleChat";

const AllChats = () => {
    const allChats = [
        {
            message : "Lorem ipsum dolor sit, amet kjss adipisicing elit keeh kjswjhhewe swmjhs jshhhe sjhhhe sjhhhs ",
            active : true
        },
        {
            message : "Lorem ipsum dolor sit, amet kj",
            active : false
        },
        {
            message : "Lorem ipsum dolor sit, amet kjss adipisicing elit keeh kjswjhhewe swmjhs jshhhe sjhhhe sjhhhs ",
            active : false
        },
        {
            message : "Lorem ipsum dolor elit keeh kjswjhhewe swmjhs jshhhe sjhhhe sjhhhs ",
            active : false
        },
        {
            message : "Lorem ipsum dolor sit, amet kjss adipisicing elit keeh kjswjhhewe swmjhs jshhhe sjhhhe sjhhhs ",
            active : false
        },
        {
            message : "Lorem ipsum dolor sit, a elit keeh kjswjhhewe swmjhs jshhhe sjhhhe sjhhhs ",
            active : false
        },
        {
            message : "Lorem ipsum dolor sit, amet kjss  sjhhhs ",
            active : false
        },
    ]
    return (
        <div>
            <div className="flex flex-col gap-5 max-h-[78vh] overflow-y-auto no-scrollbar">
                {
                    allChats?.map(chat => <SingleChat key={chat} chat={chat}></SingleChat>)
                }
            </div>
        </div>
    );
};

export default AllChats;