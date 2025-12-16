import React from 'react'
import "./home.scss"
const Home = () => {
    return (
        <>
            <div className="home-parent parent bg-img-cover">
                <div className="home-cont cont">
                    <h2 className='heading'>Welcome to our project</h2>
                    <p className='desc'>This is the home page of our React application.</p>
                    <div className="main-card">
                        <div className="card">
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
