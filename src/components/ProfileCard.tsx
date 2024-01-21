import React from 'react'
import cardImg from '../assets/cardImg.jpg'
import { useNavigate } from 'react-router-dom'
import { FarmerType } from '../types/types';
function ProfileCard(farmData: FarmerType) {
    const { name, category, location, profile_picture, banner_image, id } = farmData.farmData
    const navigate = useNavigate();

    return (
        <div className="card w-80 shadow-xl p-0 hover:shadow-2xl" onClick={() => { navigate(`/profile/${id}`) }} role='button' >
            <figure><img className="w-full h-60 object-cover" src={banner_image} alt="ProductImage" /></figure>
            <div className="card-body p-0">
                <div className='flex p-5 justify-between items-center'>
                    <img src={profile_picture} className='btn-circle w-20 h-20 object-cover' />
                    <div>
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p className='text-left'>{location}</p>
                        <div className="card-actions justify-start">
                            {
                                category.categories.map((category: any) => {
                                    return <div className='badge badge-outline' key={category}>{category}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard