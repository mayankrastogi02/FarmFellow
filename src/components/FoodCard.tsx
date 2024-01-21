import React from 'react'
import Carrots from '../assets/carrots.jpg'
import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';
import { ProductType } from '../types/types';

function FoodCard({ name, price, description }: ProductType) {
    return (
        <div className="card card-compact w-64 shadow-xl p-0">
            <figure><img src={Carrots} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex flex-row items-center'>
                    <p className='text-left'>CAD ${price}/ea</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary rounded-full"><FaCartPlus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard