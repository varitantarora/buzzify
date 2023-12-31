import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes["login-wrapper"]}>
      <div className={classes["login-left"]}>
        <h2 className={classes["ll-text"]}>Let's have a</h2>
        <h1 className={classes["ll-Buzz"]}>
          Buzz<span className={classes["ll-space"]}>space</span>
        </h1>
      </div>
      <div className={classes["login-right"]}>
          <LoginForm />
      </div>
    </div>
  );
};

export default Login;
