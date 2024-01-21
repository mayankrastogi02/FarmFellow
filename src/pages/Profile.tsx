import { useContext } from 'react'
import ProfileCard from '../components/ProfileCard'
import { UserDataContext } from '../utils/globalData'
import CardImg from '../assets/cardImg.jpg'
import Farmer from '../assets/farmer2.jpg'

function Profile() {
    // const { user } = useContext(UserDataContext)
    // console.log(user)


    return (
        // <ProfileCard userData={user[0]} />
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center w-screen mb-4'>
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
        </div>
    )
}

export default Profile