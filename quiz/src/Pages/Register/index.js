import { checkExits, register } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
function Register() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const checkExitsEmail = await checkExits("email",email);
        
        if(checkExitsEmail.length > 0) {
            alert("email da ton tai");
        } else {
            const options = {
                fullName : fullName,
                email : email,
                password : password,
                token : generateToken(),
            };
            const response = await register(options);
            if(response) {
                navigate("/login");
            } else {
                alert("dang ky that bai");
            }
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <input type = "fullName" placeholder="nhap ho ten"/>
                </div>
                <div>
                    <input type = "email" placeholder="nhap email"/>
                </div>
                <div>
                    <input type = "password" placeholder="nhap mat khau"/>
                </div>
                <div>
                    <button type = "submit" >
                    Register 
                    </button>
                </div>
            </form>
        </>
    )
}

export default Register;