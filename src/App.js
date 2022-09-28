import React, { useState } from "react";
import LoginForm from "./components/LoginForm"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "1234"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log("call Login api");
    console.log(details);

    // if (details.email == adminUser.email && details.password == adminUser.password) {
    //   console.log("logged in");
    //   setUser({
    //     name: details.name,
    //     email: details.email
    //   });
    // } else {
    //   console.log("details not match");
    //   setError("details not match");
    // }

    setError("");

    const url = "http://localhost:8080/auth/login"; 

    const reqBody = {
      name: details.name,
      password: details.password,
    };

    fetch('url', {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      //body: JSON.stringify(reqBody)
    }).then((response) => {
      console.log(JSON.stringify(response));
      if (response.status === 200) {
        console.log("logged in");
        setUser({
          name: details.name,
          email: details.email
        });
      } else {
        console.log("details not match");
        setError("details not match");
      }
    })
  }

  const Logout = () => {
    console.log("logout");
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
