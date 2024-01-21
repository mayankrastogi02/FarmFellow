import { useNavigate } from "react-router-dom";
import Care from '../assets/care.svg'

function Landing() {
    const navigate = useNavigate();
    return (
        <div className={`hero min-h-screen `}>
            <div className="hero-content text-center flex flex-col justify-between">
                <div className="max-w-md">
                    <div className="rounded-full mx-auto bg-danger-500">
                        <img src={Care} alt="Care" className="mx-auto object-fit" />
                    </div>
                    <h1 className="text-7xl font-bold">FarmFellow</h1>
                    <p className="py-6">Improving Sustainability, Animal Welfare, and Local Economy One Farmer at a Time.</p>
                    <button className="btn text-white" onClick={() => { navigate('/home') }}>Get Started</button>
                </div>
                <section className='flex flex-col gap-10'>
                    <div>
                        <p className='text-3xl font-bold'>Why Local Farmers? 💭</p>
                        <p>By building FarmFellow, our goal is to increase awareness whilst providing an intuitive solution in an industry that is oftentimes underappreciated and carries a large potential in sustainability. Currently, there are no solutions to support our local farmers directly except for weekly farmer's markets. However, many of these events are not known to the public and difficult for consumers to partake.</p>
                        <br />
                        <p>Supporting local farmers is a largely impactful act that has a tremendous effect on not only the environment, but with welfare practices and the local economy. Firstly, it reduces the environmental impact of food transportation, which is a major source of greenhouse gas emissions and climate change. Furthermore, it helps preserve the biodiversity and soil health of local ecosystems, which are often threatened by industrial agriculture and monoculture. Finally, it strengthens the social and economic fabric of local communities, which rely on farming as a source of income and food security. By supporting local farmers, we can enjoy fresh, nutritious, and diverse food while also protecting the planet and the people who grow it! 🧑‍🌾
                        </p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold'>Revolutionizing Sustainability 🌳</p>
                        <p>By supporting your local farms, you remove the middle-man and eliminate the need for large motor vehicles such as 18-wheelers and cargo planes. In chain grocery stores, we see lots of the same fruits and vegetables year-round which is an indicator of large chains mass producing and shipping these products globally. By supporting local, seasonal produce, we can slowly reduce carbon emission, one step at a time!</p>
                    </div>
                    <div>
                        <p className='text-3xl font-bold'>Impacting Sustainable Practices and Animal Welfare 🌱</p>
                        <p>Large corporations must prioritize maximizing output and profitability, which leads to inhumane processes such as steroid use and high-stress environments for cattle. Additionally, consumers will unknowingly ingest herbicides and pesticides that these large farms use to protect their crops, leading to poor soil quality and therefore, increased emissions.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing