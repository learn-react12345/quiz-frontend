import { NavLink , Outlet} from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
    return (
        <>
            <div className ="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Quiz</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            {token && (<>
                            <li>
                                <NavLink to="Topic">
                                    Topic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Answers">
                                    Answers 
                                </NavLink>
                            </li>
                            </>)}

                        </ul>
                    </div>
                    <div className = "layout-default__account">
                      {token ? (<>
                        <NavLink to = "/logout" >dang xuat</NavLink>
                      </>) : (<>
                        <NavLink to = "/login" >dang nhap</NavLink>
                        <NavLink to = "/register" >dang ky</NavLink>
                      </>)}
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    Quiz 200000000000000000000000
                </footer>
            </div>
        </>
    );
}

export default LayoutDefault;