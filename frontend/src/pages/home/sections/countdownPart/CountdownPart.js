import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './CountdownPart.css'
import Countdown from 'react-countdown';
import countdowimg from '../../../../assets/images/countdown.png'
export default function CountdownPart() {

    // Random component
    const Completionist = () => <h5 className='countdown-complete'>La promotion est finie, à bientôt !</h5>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (

                <>
                    <span className="countdown-time">
                        <span>{days}</span>
                        <small>
                            days
                        </small>
                    </span>
                    <span className="countdown-time">
                        <span>{hours}</span>
                        <small>
                            hours
                        </small>
                    </span>
                    <span className="countdown-time">
                        <span>{minutes}</span>
                        <small>
                            minutes
                        </small>
                    </span>
                    <span className="countdown-time">
                        <span>{seconds}</span>
                        <small>
                            seconds
                        </small>
                    </span>
                </>
            );
        }
    };
    return (
        <section className="section countdown-part">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="countdown-content">
                            <h3>special discount offer for vegetable items</h3>
                            <p>
                                Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minima
                            </p>
                            <div className="countdown countdown-clock" data-countdown="2022/12/22">
                                <Countdown
                                    date={Date.now() + 5000000}
                                    renderer={renderer}
                                />
                            </div>
                            <a href="/" className="btn btn-inline">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                                <span>shop now</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="countdown-img">
                            <img src={countdowimg} alt="countdown" />
                            <div className="countdown-off">
                                <span>20%</span>
                                <span>off</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
