import { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const createToken = (e) => {
    e.preventDefault();
    let body = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    axios
      .post("/api/createToken", body)
      .then((res) => {
        console.log(res);
        setToken(res.data)
        localStorage.setItem('token', res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const testToken = () => {
    axios
      .post("/api/validateToken")
      .then((res) => {
        alert('Token is Valid! 🤓')
      })
      .catch((err) => {
        alert("Token is invalid 😭")
      });
  };

  useEffect(() => {
    let savedToken = localStorage.getItem('token')
    if(savedToken) {
      setToken(savedToken)
    }
  },[])

  return (
    <div className="App">
      <header>
        <h2>JWT Example</h2>
      </header>
      <form onSubmit={createToken} className="card">
        <h2>Fill out some info</h2>
        <input
          autoComplete="false"
          ref={nameRef}
          type="text"
          placeholder="Username"
        />
        <input
          autoComplete="false"
          ref={emailRef}
          type="email"
          placeholder="Email"
        />
        <input
          autoComplete="false"
          ref={passRef}
          type="password"
          placeholder="Password"
        />
        <button>Get Token</button>
      </form>
      <br />
      {!token ? null : (
        <div className="col-container">
          <h2>Click this to test your valid Token</h2>
          <button onClick={testToken}>Test Token</button>
        </div>
      )}
    </div>
  );
}

export default App;
