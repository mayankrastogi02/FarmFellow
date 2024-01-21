import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';
import { ProductType } from '../types/types';
import { useContext } from 'react';
import { CartContext } from '../utils/globalData';

function FoodCard({ name, price, image }: ProductType) {
    const { cart, setCart } = useContext(CartContext);

    const addCart = () => {
        setCart([cart, { name, price, image }])
    }

    return (
        <div className="card card-compact w-64 shadow-xl p-0">
            <figure><img className='h-60 object-cover' src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex flex-row items-center'>
                    <p className='text-left'>CAD ${price}/ea</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-danger-500 rounded-full" onClick={addCart}><FaCartPlus className='text-white' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard