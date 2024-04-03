/* eslint-disable react/prop-types */


const UserInfo = ({openUserInfo,setOpenUserInfo}) => {
    return (
        <div className={`bg-slate-300 w-96 h-96 `}
         >
            <button onClick={() => setOpenUserInfo(!openUserInfo)}>Go back</button>
        </div>
    );
};

export default UserInfo;