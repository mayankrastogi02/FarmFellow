import { useContext } from 'react'
import ProfileCard from '../components/ProfileCard'
import { UserDataContext } from '../utils/globalData'

function Profile() {
    const { user } = useContext(UserDataContext)
    console.log(user)


    return (
        <ProfileCard userData={user[0]} />
    )
}

export default Profile