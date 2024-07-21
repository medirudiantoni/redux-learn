import React, { useState } from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'

const Home = () => {
  const [ isCart, setIsCart ] = useState(false);
  return (
    <div className="w-full h-full grid grid-cols-2 xl:grid-cols-3 overflow-x-hidden">
        <Comp1 onClick={() => setIsCart(!isCart)} />
        <Comp2 isCart={isCart} onClick={() => setIsCart(!isCart)} />
    </div>
  )
}

export default Home