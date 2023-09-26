import style from "./Header.module.css";
import HeaderBtn from "./HeaderBtn";
import logoThree from "../../assets/logo3Png.gif";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo3}>
          <img src={logoThree} alt="" />
        </div>
        <HeaderBtn onClick={props.onOpenCart}></HeaderBtn>
      </header>
    </>
  );
};

export default Header;
