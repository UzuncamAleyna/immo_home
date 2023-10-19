import style from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button className={style.loginBtn} type="submit">
      {children}
    </button>
  );
};

export default Button;
