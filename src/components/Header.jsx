import { useState } from 'react'
import '../style.css'
import Logo from '../assets/logo.png'
import searchBtn from '../assets/search-btn.png'

export default function Header() {
    const [menu, setMenu] = useState(true)

    function handleMenu(){
        setMenu(prevMenu => !prevMenu)
    }


    return(
        <header className='header'>
            <div className="overlay">
                <div className="container">
                    <nav className="navbar">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className= {menu ? 'menu-page' : 'menu-page on'}>
                            <ul className="list">
                            <li className='current'>Home</li>
                            <li>Landlord</li>
                            <li>Tenants</li>
                            <li>Contact Us</li>
                            </ul>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 menu" onClick={handleMenu}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </nav>
                    <div className="hero">
                        <span>The most affortable place to stay in the san franciso bay area</span>
                        <div className='map'>
                            <div className='map-img'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.790341711095!2d8.541353559100667!3d11.995644638122197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811468463d3b%3A0x5b4e1d2242b8d!2sMarshall%20Hotel%20Apartments!5e0!3m2!1sen!2sng!4v1675633742250!5m2!1sen!2sng" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="select-form">
                                <select name="" id="" className='select select1'>
                                    <option value="All Type">All Type</option>
                                </select>
                                <select name="" id="" className='select select2'>
                                <option value="Neighborhood">Marshall Hotel Apartments</option>
                                </select>
                                <div className='search-btn'>
                                    <img src={searchBtn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}