import { useState } from "react";

function Login( { user, setUser } ) {
    
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const baseURL = "http://localhost/user/login";

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
	e.preventDefault();
	const payload = JSON.stringify({
	    "name": username,
	    "password": password
	});

	const res = await fetch(
	    baseURL,
	    {
		"method": "POST",
		"mode": "cors",
		"headers": {
		    "Content-Type": "application/json"
		},
		body: payload
	    }
	);
	const data = await res.json();
	setUser({username: data.user.name, id: data.user.id, jwt: data.token});
	console.log(data.user.name);
    }

    return (
        <div className="login">
    <h1 className="loginHere">Please login below: </h1>
    <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="user">Username:</label>
        <input type="text" name="user" value={username} onChange={handleUsername}/>
        <label htmlFor="password">Password:</label>
        <input type="text" name="user" value={password} onChange={handlePassword}/>
        <input className="submit" type="submit" value="Submit" />

    </form>
    </div>
    );
}

export default Login;