import { checkExits, register, getAllUsers } from "../../services/usersService";
import { useNavigate, Link } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./register.module.css";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const users = await getAllUsers();
        const maxId = Math.max(...users.map(u => parseInt(u.id) || 0)) + 1;

        const checkExitsEmail = await checkExits("email", email);
        
        if (checkExitsEmail.length > 0) {
            alert("Email đã tồn tại");
        } else {
            const options = {
                id: maxId,
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken(),
            };
            const response = await register(options);
            if (response) {
                navigate("/login");
            } else {
                alert("Đăng ký thất bại");
            }
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.title}>QUIZZZ</h2>

                    <div className={styles.inputBox}>
                    <input type="text" placeholder="Nhập họ tên" required />
                    <FaUser className={styles.icon} />
                    </div>

                   
                    <div className={styles.inputBox}>
                    <input type="email" placeholder="Nhập email" required />
                    <FaUser className={styles.icon} />
                    </div>

            
                    <div className={styles.inputBox}>
                    <input type="password" placeholder="Nhập mật khẩu" required />
                    <FaLock className={styles.icon} />
                    </div>


                    <button type="submit" className={styles.btn}>Đăng ký</button>

                    <div className={styles.registerLink}>
                        <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
                    </div>

                    <div className={styles.loginNav}>
                        <Link to="/">← Quay về trang chủ</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;


