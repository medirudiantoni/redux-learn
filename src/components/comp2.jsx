import React, { useEffect, useState } from "react";
import menus from "./menus";
import CartProduct from "./cartProduct";
import { removeFromCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Comp2 = ({ isCart, onClick }) => {
  const cart = useSelector((state) => state.cart.data);
  const dispastch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const menusOnCart = cart.map((cartItem) => {
    const menu = menus.find((menuItem) => menuItem.id === cartItem.id);
    return { ...menu, qty: cartItem.qty };
  });

  return (
    <div
      className={`${
        isCart ? "w-full" : "w-0"
      } h-full bg-blue-300 overflow-hidden absolute top-0 right-0 xl:relative xl:w-full xl:col-span-1`}
    >
      <div className="w-full h-full p-5">
        <button
          onClick={onClick}
          className="xl:hidden py-1 px-3 rounded-lg bg-slate-900 text-white text-xl font-semibold"
        >
          x
        </button>
        <div className="w-full relative flex items-center justify-center xl:justify-start pb-3">
          <h2 className="text-2xl font-semibold">Cart</h2>
        </div>
        <div className="w-full h-full flex flex-col gap-3">
          {menusOnCart.map((item) => (
            <CartProduct
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              qty={item.qty}
              total={item.price * item.qty}
              onMinus={() => dispastch(removeFromCart({ id: item.id, qty: item.qty }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comp2;
