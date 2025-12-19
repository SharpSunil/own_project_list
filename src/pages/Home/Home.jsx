import React from 'react'
import "./home.scss"
import img1 from "../../assets/icon1.png"
import img2 from "../../assets/icon2.png"
import img3 from "../../assets/icon3.png"   
import img4 from "../../assets/icon4.png"   
import { Link } from 'react-router-dom';
const Home = () => {
    const cardData = [
        {
            icon: img1,
            heading: "Merge PDF",
            desc: "If you want to merge multiple PDF files into a single document, use this feature.",
            link: "/merge-pdf"
        },
        {
            icon: img2,
            heading: "Feature Two",
            desc: "Description of feature two.",
            link: "/feature-two"
        },
        {
            icon: img3,
            heading: "Feature Three",
            desc: "Description of feature three.",
            link: "/feature-three"
        },

        {
            icon: img4,
            heading: "Feature Four",
            desc: "Description of feature four.",
            link: "/feature-four"
        },
        {
            icon: img1,
            heading: "Feature Five",
            desc: "Description of feature five.",
            link: "/feature-five"   
        },
        {
            icon: img1,
            heading: "Feature Six",
            desc: "Description of feature six.",
            link: "/feature-six"
        },
        
    ];
    return (
        <>
            <div className="home-parent parent bg-img-cover">
                <div className="home-cont cont">
                    <h2 className='heading'>Welcome to our project</h2>
                    <p className='desc'>This is the home page of our React application.</p>
                    <div className="main-card">
                        {cardData.map((card, index) => 
                        <Link className="card" to={card.link} key={index}  >
                            <div className="icon"><img src={card.icon} /></div>
                            <h3 className='card-heading'>{card.heading}</h3>
                            <p className='card-desc'>{card.desc}</p>
                        </Link>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
