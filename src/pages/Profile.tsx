import { useContext, useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { UserDataContext } from '../utils/globalData'
import { FaStar } from '@react-icons/all-files/fa/FaStar'
import CardImg from '../assets/cardImg.jpg'
import Farmer from '../assets/farmer3.jpg'
import FoodCard from '../components/FoodCard'
import { useParams } from 'react-router-dom'
import { getFarmerById } from '../utils/dbFunctions'
import { FarmerType, ProductType } from '../types/types'

function Profile() {
    const [farmer, setFarmer] = useState<FarmerType>();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [categories, setCategories] = useState<string>('');
    let { id } = useParams();
    if (id === undefined) {
        return;
    }
    useEffect(() => {
        const fetchData = async () => {
            const res = await getFarmerById(id!);
            if (res == null) {
                return;
            }
            const farmer = res[0] as FarmerType;
            setFarmer(farmer);
            let categoryString = '';
            farmer.category.categories.forEach((category) => {
                categoryString += category + ', ';
            });
            categoryString = categoryString.slice(0, -2);
            setCategories(categoryString);

            const productList = farmer.products.products as unknown as ProductType[];
            setProducts(productList);
        }

        fetchData();

    }, []);

    return (
        <div className='flex flex-col justify-left'>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className="relative w-screen">
                    {/* Banner Image */}
                    <img
                        src={farmer?.banner_image}
                        alt="Banner"
                        className="w-full h-40 object-cover"
                    />

                    {/* Profile Picture */}
                    <img
                        src={farmer?.profile_picture}
                        alt="Profile"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-8 w-24 h-24 border-4 border-white rounded-full lg:left-12 lg:-mb-12 lg:transform-none"
                    />
                </div>
            </div>
            <div className='flex flex-col p-12 pb-0'>
                <div className='flex flex-row items-center justify-start gap-2'>
                    <p className='text-left text-2xl font-bold'>{farmer?.name}</p>
                    <button className='text-white rounded-3xl w-16 h-6 items-center justify-center flex text-xs'>Pickup</button>
                </div>
                <p className='text-left text-sm'>{categories}</p>
            </div>
            <div className='flex flex-col p-12 pt-8'>
                <p className='text-left text-2xl mb-4'>Menu</p>
                <div className='flex flex-wrap items-center justify-between'>
                    {
                        products.map((item) => {
                            console.log(item);
                            return <FoodCard key={item.name} name={item.name} image={item.image} price={item.price} description='' />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile