import React from "react";
import menus from "./menus";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import Navbar from "./navbar";

const Comp1 = ({ onClick }) => {
  const dispastch = useDispatch();
  return (
    <div className="col-span-2 h-full rounded-2xl">
      <Navbar />
      <div className="w-full p-5 bg-blue-300 mb-5 flex items-center justify-between xl:hidden">
        <h2 className="font-bold text-xl">Kopi Costa</h2>
        <button onClick={onClick} className="w-10 h-6 bg-blue-800"></button>
      </div>
      <div className="w-full h-full flex gap-4 gap-y-2 flex-wrap p-5">
        {menus.map((menu) => (
          <button
            onClick={() => dispastch(addToCart({ id: menu.id, qty: 1 }))}
            key={menu.id}
            className="w-[200px] h-fit border-2 border-neutral-700 rounded-xl overflow-hidden hover:scale-[1.05] duration-100 group"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full aspect-square object-cover border-b border-neutral-600"
            />
            <div className="p-3">
              <h1 className="text-xl font-semibold mb-2">{menu.name}</h1>
              <p className="text-teal-600 font-semibold">Rp {menu.price},-</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Comp1;
