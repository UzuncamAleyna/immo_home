import style from "./ButtonSearch.module.css";

const Button = ({ children }) => {
  return (
    <button className={style.searchBtn} type="submit">
      {children}
    </button>
  );
};

export default Button;
