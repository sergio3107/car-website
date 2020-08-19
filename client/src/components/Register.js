import React from "react";

function Register() {
  return (
    <div className="card-1">
      <form action="/" method="post">
        <h1>Hello</h1>
        <p>Enter your Name:</p>
        <input type="text" name="name" />
        <p>Enter your Surname:</p>
        <input type="text" surname="surname" />
        <p>Enter your Email:</p>
        <input type="text" name="email" />
        <p>Enter your Password:</p>
        <input type="text" />
        <br />
        <button type="submit" name="submit" value="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
