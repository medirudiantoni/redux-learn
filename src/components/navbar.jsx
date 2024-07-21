import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [cartArr, setCartArr] = useState([]);
  const cart = useSelector(state => state.cart.data);
  useEffect(() => {
    setCartArr(cart.map(c => c.qty))
  }, [cart]);
  useEffect(() => {
    setTotalCart(cartArr.length > 0 ? cartArr.reduce((a, b) => a + b) : false)
  }, [cartArr])
  return (
    <div className="w-full h-fit py-5 px-8 bg-blue-200 mb-10 flex items-center justify-between">
        <div className="text-xl">CartState</div>
        <div className="text-xl relative">
          { totalCart && (
              <div className="absolute bottom-1/2 left-1/2 py-0.5 px-1.5 bg-teal-600 text-sm rounded-full text-white">{totalCart}</div>
          ) }
          <span>🛒</span>
        </div>
      </div>
  )
}

export default Navbar