import { useState } from 'react'
import '../style.css'
import Data from '../Data.json'
import ReactPaginate from 'react-paginate';
import BedIcon from '../assets/Bed.svg'
import ShowerIcon from '../assets/Shower.svg'
import SizeIcon from '../assets/Size.svg'

export default function SectionTwo() {
    const [cards, setCards] = useState(Data)
    const [pageNumber, setPageNumber] = useState(0)
    const [viewAll, setViewAll] = useState(true)

    const cardsPerPage = 6
    const pageVisited = pageNumber * cardsPerPage

    const displayCards = cards.slice(pageVisited, pageVisited + cardsPerPage).map(card => {
            return(
                <div className="card">
                    <img src={card.image} alt="" className='image'/>
                    <div className='details'>
                        <h3>{card.location}</h3>
                        <span className="room">{card.type}</span>
                        <span className="price">{card.price}</span>
                    </div>
                    <div className="category">
                        <div className='flexbox'>
                            <img src={BedIcon} alt="" className='bed'/>
                            <span>{card.bedrooms}</span>
                        </div>
                        <div className='flexbox'>
                            <img src={ShowerIcon} alt="" />
                            <span>{card.showers}</span>
                        </div>
                        <div className='flexbox'>
                            <img src={SizeIcon} alt="" />
                            <span>{card.bathrooms}</span>
                        </div>
                    </div>
                </div>
            )
        })

        const cardDisplay = cards.map(card => {
            return(
                <div className="card">
                    <img src={card.image} alt="" className='image'/>
                    <div className='details'>
                        <h3>{card.location}</h3>
                        <span className="room">{card.type}</span>
                        <span className="price">{card.price}</span>
                    </div>
                    <div className="category">
                        <div className='flexbox'>
                            <img src={BedIcon} alt="" className='bed'/>
                            <span>{card.bedrooms}</span>
                        </div>
                        <div className='flexbox'>
                            <img src={ShowerIcon} alt="" />
                            <span>{card.showers}</span>
                        </div>
                        <div className='flexbox'>
                            <img src={SizeIcon} alt="" />
                            <span>{card.bathrooms}</span>
                        </div>
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(cards.length / cardsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    function handleClick(){
        setViewAll(prevState => !prevState)
    }

    return(
        <section className='section-2'>
            <div className="container">
                <div className="flex-header">
                    <h2 className='line'>list of properties</h2>
                    <div className="view-btn" onClick={handleClick}>
                        {viewAll ? "View All Property" : "Show Less Property"}
                    </div>
                </div>
                <div className="card-group">
                    <div className="cards">
                        {viewAll ? displayCards : cardDisplay}
                    </div>
                    {viewAll && <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'pagination-btn'}
                        previousLinkClassName={'previous-btn'}
                        nextLinkClassName={'next-btn'}
                        disabledClassName={'disabled'}
                        activeClassName={'active'}
                    />}
                </div>
            </div>
        </section>
    )
}