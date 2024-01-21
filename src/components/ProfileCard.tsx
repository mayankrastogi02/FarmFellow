import React from 'react'
import cardImg from '../assets/cardImg.jpg'
import { useNavigate } from 'react-router-dom'
function ProfileCard() {
    const navigate = useNavigate();
    return (
        <div className="card w-96 shadow-xl p-0 hover:shadow-2xl" onClick={() => { navigate('/profile') }} role='button' >
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
}

export default ProfileCard