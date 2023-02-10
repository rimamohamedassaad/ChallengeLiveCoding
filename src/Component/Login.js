import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import './login.css'
import { useNavigate  , Link} from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    // const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/users/login', {
                email,
                password,
            });
            setAuth(true);
            console.log("navigate")
            navigate("/ItemValueList")
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form1">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)
                console.log(e.target.value)}}
                placeholder="Password"
            />
            <Link to="/ItemValueList">
                <button type="submit" className="button1" onClick={handleSubmit}>Login</button>
            </Link>

            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
