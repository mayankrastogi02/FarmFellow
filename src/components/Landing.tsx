import React from 'react'
import { useNavigate } from "react-router-dom";
import Care from '../assets/care.svg'

function Landing() {
    const navigate = useNavigate();
    return (
        <div className={`hero h-screen`}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="rounded-full mx-auto bg-danger-500">
                        <img src={Care} alt="Care" className="mx-auto object-fit" />
                    </div>
                    <h1 className="text-7xl font-bold">FarmFellow</h1>
                    <p className="py-6">Improving Sustainability, Animal Welfare, and Local Economy One Farmer at a Time.</p>
                    <button className="btn text-white" onClick={() => { navigate('/home') }}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Landing