import React from 'react'
import Carrots from '../assets/carrots.jpg'
import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';

function FoodCard() {
    return (
        <div className="card card-compact w-64 shadow-xl p-0">
            <figure><img src={Carrots} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Carrots</h2>
                <div className='flex flex-row items-center'>
                    <p className='text-left'>CAD $1.20/ea</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary rounded-full"><FaCartPlus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard