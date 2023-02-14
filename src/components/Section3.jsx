import '../style.css'
import ImageOne from '../assets/unsplash_nEtpvJjnPVo.png'
import ImageTwo from '../assets/Image 2.png'
import ImageThree from '../assets/unsplash_uooMllXe6gE.png'
import ImageFour from '../assets/unsplash_XdWkFaHI97c.png'

export default function SectionThree() {
    return(
        <section className='section-3'>
            <div className="container">
                <div className="image-grid">
                    <div className="image-flex flex-1">
                        <div>
                            <img src={ImageOne} width="250" height="334" alt="" />
                            <span>Flexible Leases</span>
                        </div>
                        <div>
                            <img src={ImageTwo} width="270" height="270" alt="" />
                            <span>7-Day Happiness Guaranteed</span>
                        </div>
                    </div>
                    <div className="image-flex flex-2">
                        <div>
                            <img src={ImageThree} width="212" height="285" alt="" />
                            <span>Monthly House Cleaning</span>
                        </div>
                        <div>
                            <img src={ImageFour} width="338" height="356" alt="" />
                            <span>Choose Your Own Roommate</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3>Flexibility and options to suit your lifestyle.</h3>
                    <p>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
                    <button className="btn">Search Rooms</button>
                </div>
            </div>
        </section>
    )
}