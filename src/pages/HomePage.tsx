import React from 'react'
import ProfileCard from '../components/ProfileCard';
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
                            <ProfileCard />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default HomePage