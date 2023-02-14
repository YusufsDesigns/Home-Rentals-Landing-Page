import { useState } from 'react'
import '../style.css'
import Image from '../assets/Ellipse 4.png'

export default function SectionFive() {
    return(
        <section className='section-5'>
            <div className="content">
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
                    <div className="profile">
                        <img src={Image} alt="" />
                        <div>
                            <h4>Harry Wilson</h4>
                            <span>Property Owner</span>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="current"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MMRnkv3BEWY" title="YouTube video player" frameborder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    )
}