import useAuth from "../../hooks/useAuth";
import Desktop from "../../layouts/Desktop/Desktop";
import Mobile from "../../layouts/Mobile/Mobile";
import Login from "../Login/Login";

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            {user ?
                <>
                    <div className="lg:block hidden">
                        <Desktop></Desktop>
                    </div>
                    <div className="lg:hidden">
                        <Mobile></Mobile>
                    </div>
                </>
                :
                <Login></Login>
            }
        </div>
    );
};

export default Home;