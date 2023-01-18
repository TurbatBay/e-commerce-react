import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" /> <br />
        <label htmlFor="username">UserName:</label>
        <input name="username" type="text" /> <br />
        <label htmlFor="username">Phone Number:</label>
        <input name="phonenumber" type="number" /> <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" /> <br />
        <button>Sign in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
