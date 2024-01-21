import { useContext } from 'react'
import ProfileCard from '../components/ProfileCard'
import { UserDataContext } from '../utils/globalData'
import { FaStar } from '@react-icons/all-files/fa/FaStar'
import CardImg from '../assets/cardImg.jpg'
import Farmer from '../assets/farmer3.jpg'
import FoodCard from '../components/FoodCard'

function Profile() {
    // const { user } = useContext(UserDataContext)
    // console.log(user)
    const arr = [1, 2, 3, 4, 5];


    return (
        // <ProfileCard userData={user[0]} />
        <div className='flex flex-col justify-left'>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className="relative w-screen">
                    {/* Banner Image */}
                    <img
                        src={CardImg}
                        alt="Banner"
                        className="w-full h-40 object-cover"
                    />

                    {/* Profile Picture */}
                    <img
                        src={Farmer}
                        alt="Profile"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-8 w-24 h-24 border-4 border-white rounded-full lg:left-12 lg:-mb-12 lg:transform-none"
                    />
                </div>
            </div>
            <div className='flex flex-col p-12 pb-0'>
                <p className='text-left text-2xl font-bold'>Steveston Farms</p>
                <p className='text-left text-sm'>Vegetables, Poultry, Eggs</p>
                <button className='text-white rounded-3xl w-24 h-8 mt-4 items-center justify-center flex'>Pickup</button>
            </div>
            <div className='flex flex-col p-12 pt-8'>
                <p className='text-left text-2xl mb-4'>Menu</p>
                <div className='flex flex-wrap items-center justify-between'>
                    {
                        arr.map((item) => {
                            return <FoodCard />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile