import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import EsportEventsCard from './EsportEvents/EsportEvent';
import './recommended.css'
import { useRef, useState } from 'react';

function Recommended() {
    const [slideNumber, setSlideNumber] = useState(0)
    const slideRef = useRef()

    const handleSlide = (direction) => {
        let distance = slideRef.current.getBoundingClientRect().x - 878
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            slideRef.current.style.transform = `translateX(${200 + distance}px)`
        }
        if (direction === 'right' && slideNumber < 3) {
            setSlideNumber(slideNumber + 1)
            slideRef.current.style.transform = `translateX(${-200 + distance}px)`
        }

    }

    return (
        <>
            <div className="recommended-top">
                <h2 className='recommended-title'>Recommended</h2>
                <div className="esport-top">
                    <h2 className="esportEvents-title">Esports Events</h2>
                    <span className="esportEvents-more">More &gt;</span>
                    <div className="recommended-slide">
                        <FontAwesomeIcon onClick={() => handleSlide('left')}
                            className="recomment-slide-icon" icon={faAngleLeft}
                        />
                        <FontAwesomeIcon onClick={() => handleSlide('right')}
                            className="recomment-slide-icon" icon={faAngleRight}
                        />
                    </div>
                </div>
            </div>
            <div className="recommended-wrapper">
                <div className="recommended-left">
                    <div className="re-left">
                        <img src="https://img.nimo.tv/o/banner/72B45ACADCEB1B1626CE0E20247096CA_259b0205145bd9f3f6f7c8bf589b732b.jpg/w999_l0/img.webp" alt=""
                            className='re-img-left'
                        />
                    </div>
                    <div className="re-right">
                        <img src="https://img.nimo.tv/o/banner/490D3F5E030833E8BF2B740A9E5EFB0F_514d68765ce1615d8811852be8df0bdc.png/w600_l0/img.webp" alt=""
                            className='re-img-right'
                        />
                        <img src="https://img.nimo.tv/o/banner/110CB34A37E9A8516D9821D418478845_6d0bb4a8212f32f74cdd138f74c08888.jpg/w600_l0/img.webp" alt=""
                            className='re-img-right'
                        />
                    </div>
                </div>
                <div className="recommended-right" >
                    <div className="esportEvent-container" ref={slideRef}>
                        <EsportEventsCard
                            id='1'
                            imgURL="https://img.nimo.tv/o/banner/D684FD95930EA1E9E28219EC83089270_1a8f2f69cedc6cb5b8ba78bdd1cd72d5.jpg/w640_l0/img.webp"
                            desc='PLPM-2022'
                            type='PUBG Mobile'
                            time='Apr 25, 1:00AM'
                            status='End'
                        />
                        <EsportEventsCard
                            id='2'
                            imgURL="https://img.nimo.tv/o/banner/D684FD95930EA1E9E28219EC83089270_1a8f2f69cedc6cb5b8ba78bdd1cd72d5.jpg/w640_l0/img.webp"
                            desc='PLPM-2022'
                            type='PUBG Mobile'
                            time='Apr 25, 1:00AM'
                            status='End'
                        />
                        <EsportEventsCard
                            id='3'
                            imgURL="https://img.nimo.tv/o/banner/D684FD95930EA1E9E28219EC83089270_1a8f2f69cedc6cb5b8ba78bdd1cd72d5.jpg/w640_l0/img.webp"
                            desc='PLPM-2022'
                            type='PUBG Mobile'
                            time='Apr 25, 1:00AM'
                            status='End'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recommended;