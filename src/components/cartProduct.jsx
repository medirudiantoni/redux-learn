import React from 'react'

const CartProduct = ({image, name, price, qty, total, onMinus}) => {
  return (
    <div className='w-full h-fit p-2 rounded-xl bg-slate-50 shadow-lg flex gap-2 items-start'>
        <div className="h-fit bg-slate-500 flex-1 aspect-square rounded-md overflow-hidden">
            <img src={image} alt={name} className='w-full aspect-square object-cover' />
        </div>
        <div className="h-fit flex-[2]">
            <h3 className="font-semibold">{name}</h3>
        </div>
        <div className="h-fit flex-[1.5]">
            <p className="">{price}</p>
        </div>
        <div className="h-fit flex-[0.5]">
            <p>{qty}</p>
        </div>
        <div className="h-fit flex-[1]">
            <p>{total}</p>
        </div>
        <div onClick={onMinus} className="h-fit flex-[0.5]">
            <button className="w-full h-fit bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-xl">
                <p className='text-4xl font-semibold'>-</p>
            </button>
        </div>
    </div>
  )
}

export default CartProduct