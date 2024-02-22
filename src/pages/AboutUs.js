import React from 'react'
import './About.css';
import Header from '../Componnents/Header';
import Main from '../Componnents/Main';
export default function AboutUs() {
  return (
    <div>
        <Main/>
        <Header/>
        <section id="about-section">
            <div className="about-left">
                <img src="https://w0.peakpx.com/wallpaper/857/221/HD-wallpaper-vacation-beograd-car-dog-pets.jpg" alt="About Img"/>
            </div>
            <div className="about-right">
                <h4 className='abocol'>HOPE FOR PAW</h4>
                <h1>About Page</h1>
                <p className='abocol'>Welcome to the Hope For Paw, Your dedicated online platform 
                    for making a meaningful impact on the lives of street dogs. 
                    Our mission is simple yet profound: to facilitate the swift 
                    and compassionate rescue of street dogs through the collaborative
                    efforts of citizens and dedicated rescue members.
                </p>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            <p className='abocol'>Address</p>
                            <span className="saprater">:</span>
                            <p className='abocol'>Sundharapuram ,Coimbatore , India</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <p className='abocol'>Phone No</p>
                            <span className="saprater">:</span>
                            <p className='abocol'>+91 877-843-2734</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="far fa-envelope"></i>
                            </span>
                            <p className='abocol'>Email ID</p>
                            <span className="saprater">:</span>
                            <p className='abocol'>Nelson_Samuel_J_Official@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}
