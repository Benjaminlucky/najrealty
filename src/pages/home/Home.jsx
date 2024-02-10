import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../../components/services/Service';
import './home.css'

function Home() {
  return (
    <main className='main__container'>
        {/*Hero section start */}
        <section className="hero-section">
            <div className="hero__section-container">
                <div className="hsContent">
                    <div className="hsContent-msg">
                        <h6>Welcome to NAJ Real Estate Limited, our mission is:</h6>
                        <h1>Promoting eco-friendly, sustainable living to eliminate environmental hazards in real estate.</h1>
                    </div>
                    <div className="hsContent-btns">
                        <Link to="#" className='btn btn-secondary'>See our Real Estate Offerings</Link>
                        <Link to="#" className='btn btn-primary'>Book Inspection</Link>
                    </div>
                </div>
            </div>
        </section>

        {/*end of Hero Section */}
        {/*start of Services section */}

        <section className="service__section">
            <Service />
        </section>
    </main>
  )
}

export default Home