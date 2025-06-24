import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../authSlice";
import { Link, useNavigate } from "react-router-dom";



// Login
const LoginForm = () => {

    // State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // Users
    const [users, setUsers] = useState([]);
    const [findUser, setFindUser] = useState(null);

    // Redirect
    const navigate = useNavigate();


    // useEffect
    useEffect(() => {
        fetch('https://66755c8da8d2b4d072efb8cf.mockapi.io/api/v1/blog/react_project')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    
    // Find
    const searchUser=()=>{
        const user=users.find((u)=>u.email.toLowerCase() ===email); // erenmulkoglu@gmail.com
        setFindUser(user);
        return findUser;
      }   

    // HandleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Default: email: erenmulkoglu@gmail.com
        // Defalut: password: root

        /*
        if (email === "root" && password === "root") {
            dispatch(login({ email }))
            // Redirect 
            navigate('/index')
        } else {
            alert("Geçersiz Kullanıcı adı veya şifre girdiniz");
        }
         */

        if (email === findUser.email && password === findUser.password) {
            dispatch(login({ email }))
            // Redirect 
            navigate('/index')
        } else {
            alert("Geçersiz Kullanıcı adı veya şifre girdiniz");
        }  
    }

    // return
    return (
        <div className="shadow p-2">
            <h1 className="text-center display-3 text-primary mt-4">Login</h1>

            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <div class="mb-4">
                        <label for="" class="form-label">Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={email}
                            className="form-control"
                            placeholder="Kullanıcı Adı"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">

                    <div className="mb-4">
                        <label for="" class="form-label">Kullanıcı Şifresi</label>
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            placeholder="Kullanıcı Şifresi"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="reset" className="btn btn-danger me-2"> Temizle </button>
                <button type="submit" className="btn btn-primary" onClick={searchUser}> Giriş Yap </button>
                <Link className="btn btn-info text-white ms-2" to="/register">Kayıt Ol</Link>
            </form>
        </div>
    );
} //end Login

// Export
export default LoginForm;