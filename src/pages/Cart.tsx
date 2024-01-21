// @ts-nocheck
import React, { useContext, useState } from 'react'
import Carrots from '../assets/carrots.jpg'
import { CartContext } from '../utils/globalData';

function Cart() {
    const [counter, setCounter] = useState(1);
    const { cart } = useContext(CartContext);
    const toggleModal = () => {
        document.getElementById('confirmation').showModal();
    }

    console.log("THIS IS CART");
    console.log(cart)
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center w-full mb-4'>
                <p className='text-2xl font-bold'>Your Cart</p>
            </div>
            <div className='px-12 pb-4'>
                <p className='text-left text-2xl font-bold'>Steveston Farms</p>
            </div>

            <div className='flex flex-wrap items-center px-12 gap-4'>
                <div className="card lg:card-side p-0 shadow-xl h-48">
                    <figure className='w-1/4'><img src={Carrots} alt="Album" /></figure>
                    <div className="card-body">
                        <p className="text-2xl text-left">Carrots</p>
                        <p className="text-left">Large carrots</p>
                        <p className="text-left">CAD $1.20/ea</p>
                        <div className="card-actions justify-end">
                            <div className='flex flex-row items-center rounded-full border-2 border-gray-300'>
                                <button className="btn border-none bg-transparent rounded-l-full" onClick={() => setCounter(counter - 1)}>-</button>
                                <p className='px-4'>{counter}</p>
                                <button className="btn border-none bg-transparent rounded-r-full" onClick={() => setCounter(counter + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full my-8'>
                <p className='text-2xl font-bold'>Order Summary</p>
                <div className='flex flex-row items-center justify-center w-full'>
                    <div className='flex flex-col items-center justify-center w-1/2'>
                        <p className='text-left'>Subtotal</p>
                        <p className='text-left'>Delivery Fee</p>
                        <p className='text-left'>Total</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2'>
                        <p className='text-right'>CAD $1.20</p>
                        <p className='text-right'>CAD $0.00</p>
                        <p className='text-right'>CAD $1.20</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2 gap-2'>
                        <button className='text-white rounded-full w-24 h-12 items-center justify-center flex text-xs' onClick={toggleModal}>Checkout</button>
                        <button className='text-white rounded-full w-24 h-12 items-center justify-center flex text-xs' onClick={() => { setCounter(0) }}>Clear</button>
                    </div>
                    <dialog id="confirmation" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="text-white font-bold text-lg">Order Placed!</h3>
                            <p className="text-white py-4">Please check your email for the receipt.</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}

export default Cart