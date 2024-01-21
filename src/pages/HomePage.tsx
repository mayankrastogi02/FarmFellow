import { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard';
import { getFarms } from '../utils/dbFunctions';
function HomePage() {
    const [farms, setFarms] = useState<unknown>();

    useEffect(() => {
        const fetchFarms = async () => {
            setFarms(await getFarms());
        }

        fetchFarms();
    }, []);

    return (
        <div className='flex flex-col gap-10 mt-16'>
            <div className='flex flex-col items-center justify-start w-full mb-4'>
                <p className='text-4xl font-bold'>Farms Near You</p>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8'>
                {
                    farms ? farms.map((farm) => {
                        return (
                            <ProfileCard farmData={farm} />
                        )
                    }) : null
                }
            </div>
        </div >
    )
}

export default HomePage