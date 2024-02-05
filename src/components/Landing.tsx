import { useNavigate } from "react-router-dom";
import Care from '../assets/care.svg'
import Landing2 from '../assets/landing2.svg'

function Landing() {
    const navigate = useNavigate();
    return (
        <div className={`hero min-h-screen`}>
            <div className="hero-content text-center flex flex-col justify-between">
                <div className="max-w-md h-screen flex flex-col mt-20">
                    <div className="rounded-full mx-auto bg-danger-500">
                        <img src={Care} alt="Care" className="mx-auto object-fit" />
                    </div>
                    <h1 className="text-7xl font-bold">FarmFellow</h1>
                    <p className="py-6">Improving Sustainability, Animal Welfare, and Local Economy One Farmer at a Time.</p>
                    <button className="btn text-white" onClick={() => { navigate('/home') }}>Get Started</button>
                </div>
                <section className='flex flex-col gap-10 mb-20'>
                    <div className="flex flex-row items-center justify-around gap-4 w-full">
                        <div>
                            <img src={Landing2} alt="Care" className="items-end" />
                        </div>
                        <div className="flex flex-col gap-6 text-left">
                            <p className='text-left text-3xl font-bold'>Why Local Farmers? 💭</p>
                            <p className="text-left">FarmFellow aims to raise awareness and provide a solution for supporting underappreciated local farmers, enhancing sustainability.  Currently, there are no solutions to support our local farmers directly except for weekly farmer's markets. However, many of these events are not known to the public and difficult for consumers to partake.</p>
                            <p className='text-3xl font-bold'>Revolutionizing Sustainability 🌳</p>
                            <p>Supporting local farms eliminates middlemen and large transport vehicles, reducing carbon emissions and promoting seasonal produce.</p>
                            <p className='text-3xl font-bold'>Impacting Sustainable Practices and Animal Welfare 🌱</p>
                            <p>Unlike large corporations, local farms avoid inhumane practices and harmful chemicals, promoting healthier soil and reduced emissions.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing