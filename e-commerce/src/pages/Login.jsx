import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "khangailhuu@gmail.com",
    password: "123",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is permitted");
      console.log("user permitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } }); //ene n login hiisnii daraa shuud home page ruu orno
    } else {
      toast("User is not permitted");
      console.log("user not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      }); //its working but shuud navigate n ajillaad bn toast n ajillahgui harin navigate iig n awaad haychwal User Permitted gj garch irj bn
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="login-form-flex">
        <label htmlFor="username">Login Name:</label>
        <input className="login-form-input" name="username" type="email" />{" "}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          className="login-form-input"
          name="password"
          type="password"
        />{" "}
        <br />
        <button className="login-form-button">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}
