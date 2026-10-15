import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./authContextValue";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter username and password");
      return;
    }

    login(username.trim());
    navigate(location.state?.from || "/search");
  };

  return (
    <main className="container py-4" style={{ maxWidth: "500px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />
        <input
          className="form-control mb-3"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
    </main>
  );
}

export default Login;
