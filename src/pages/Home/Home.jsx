import useAuth from "../../hooks/useAuth";
import Desktop from "../../layouts/Desktop/Desktop";
import Login from "../Login/Login";

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            {user ?
                <Desktop></Desktop>
                :
                <Login></Login>
            }
        </div>
    );
};

export default Home;