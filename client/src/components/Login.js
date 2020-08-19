import React from "react";

function Login() {
  return (
    <div className="card-1">
      <form>
        <h1>Hello</h1>
        <p>Enter your Name:</p>
        <input type="text" name="Name" />
        <p>Enter your Surname:</p>
        <input type="text" />
        <p>Enter your Password:</p>
        <input type="text" />
        <br />
        <button type="submit" name="submit" value="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
