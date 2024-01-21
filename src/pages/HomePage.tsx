import React from 'react'
import cardImg from '../assets/cardImg.jpg'
function HomePage() {
    const arr = [1, 2, 3, 4, 5];
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center w-full mb-4'>
                <p className='text-2xl font-bold'>Local Farms near you</p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {
                    arr.map((item) => {
                        return (
                            <div className="card w-96 shadow-xl p-0" >
                                <figure><img src={cardImg} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Steveston Farm
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p className='text-left'>If a dog chews shoes whose shoes does he choose?</p>
                                    <p className='text-left'>Steveston, BC</p>
                                    <div className="card-actions justify-start">
                                        <div className="badge badge-outline">Kale</div>
                                        <div className="badge badge-outline">Carrots</div>
                                        <div className="badge badge-outline">Cucumbers</div>
                                        <div className="badge badge-outline">Lettuce</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default HomePage