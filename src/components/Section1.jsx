import { useState } from 'react'
import '../style.css'
import Image from '../assets/unsplash_oGmf8o53LeE.png'
import Icon1 from '../assets/Vector.png'
import Icon2 from '../assets/Vector (1).png'
import Icon3 from '../assets/Vector (2).png'
import Icon4 from '../assets/Vector (3).png'
import Icon5 from '../assets/Vector (4).png'
import Icon6 from '../assets/Vector (5).png'

export default function SectionOne() {
    return(
        <section className='section-1'>
            <div className="container">
                <h2 className='line'>minimum living cost takes care of everything</h2>
                <div className='hero'>
                    <div className='image'>
                        <img src={Image} alt="" />
                    </div>
                    <div className="icon-grid">
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon1} alt="" />
                                </div>
                            </div>
                            <span>Pay as Little as possible!</span>
                        </div>
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon2} alt="" />
                                </div>
                            </div>
                            <span>Enjoy wisdom of community!</span>
                        </div>
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon3} alt="" />
                                </div>
                            </div>
                            <span>Let's somebody else take care of Landlord!</span>
                        </div>
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon4} alt="" />
                                </div>
                            </div>
                            <span>Enjoy peaceful Environment!</span>
                        </div>
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon5} alt="" />
                                </div>
                            </div>
                            <span>Stay Safe! Save Money!</span>
                        </div>
                        <div className='flex-group'>
                            <div className='icon-box'>
                                <div className='icon'>
                                    <img src={Icon6} alt="" />
                                </div>
                            </div>
                            <span>Pay for what you use !</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}