import { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderBtn.module.css";
import CartContext from "../Store/cart-context";

const HeaderBtn = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${style.button} ${btnIsHighLighted ? style.bump : ""}`;

  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => setBtnIsHighLighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderBtn;
