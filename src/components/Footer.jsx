import '../style.css'
import img1 from '../assets/Shape.png'
import img2 from '../assets/Path.png'
import img3 from '../assets/Shape (1).png'
import img4 from '../assets/Facebook.png'
import img5 from '../assets/Twitter.png'
import img6 from '../assets/LinkedIn.png'
import img7 from '../assets/Youtube.png'
import img8 from '../assets/Instagram.png'
import img9 from '../assets/GooglePlus.png'
import img10 from '../assets/Pinterest.png'
import img11 from '../assets/RSS.png'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-body">
                    <div className="footer-top">
                        <h2>Logo</h2>
                        <div className='footer-contact'>
                            <div className='contact-group'>
                                <img src={img1} alt="" />
                                <span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
                            </div>
                            <div className='contact-control'>
                                <div className='contact-group'>
                                    <img src={img2} alt="" />
                                    <span>(123) 456-7890</span>
                                </div>
                                <div className='contact-group'>
                                    <img src={img3} alt="" />
                                    <span>(123) 456-7890</span>
                                </div>
                            </div>
                            <div className='social'>
                                <span>Social Media</span>
                                <img src={img4} alt="" />
                                <img src={img5} alt="" />
                                <img src={img6} alt="" />
                                <img src={img7} alt="" />
                                <img src={img8} alt="" />
                                <img src={img9} alt="" />
                                <img src={img10} alt="" />
                                <img src={img11} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                        </ul>
                        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}