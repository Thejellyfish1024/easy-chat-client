import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useUser from "./useUser";


const useMyContacts = () => {
    const [myContacts, setMyContacts] = useState([]);
    const {user} = useAuth();
    const {data} = useUser(user?.email);
   useEffect(() =>{
    if(data){
        setMyContacts(data?.contacts)
    }
   },[])
    // console.log(myContacts);

    return {myContacts};
};

export default useMyContacts;