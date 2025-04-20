import { login } from "../../services/usersService";
import { useNavigate, Link } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { FaUser, FaLock } from "react-icons/fa";

import styles from "./login.module.css";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const response = await login(email, password);
        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/");
        } else {
            alert("Sai tài khoản hoặc mật khẩu");
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.title}>QUIZZZ</h2>

                    <div className={styles.inputBox}>
                        <input type="email" placeholder="Nhập email" required />
                        <FaUser className={styles.icon} />
                    </div>

                    <div className={styles.inputBox}>
                        <input type="password" placeholder="Nhập mật khẩu" required />
                        <FaLock className={styles.icon} />
                    </div>

                    <div className={styles.rememberForgot}>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="#">Quên mật khẩu?</Link>
                    </div>

                    <button type="submit" className={styles.btn}>Đăng nhập</button>

                    <div className={styles.registerLink}>
                        <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
                    </div>

                    <div className={styles.loginNav}>
                        <Link to="/">← Quay về trang chủ</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
