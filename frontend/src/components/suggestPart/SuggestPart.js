import React, { useState } from 'react'
import vegetables from '../../assets/images/vegetables.png'
import fruits from '../../assets/images/fruits.png'
import groceries from '../../assets/images/groceries.png'
import dairy_farm from '../../assets/images/dairy_farm.png'
import sea_foods from '../../assets/images/sea_foods.png'
import vegan_foods from '../../assets/images/vegan_foods.png'
import dry_foods from '../../assets/images/dry_foods.png'
import fast_foods from '../../assets/images/fast_foods.png'
import './SuggestPart.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
export default function SuggestPart() {

    const properties = {
        duration: 5000,
        autoplay: true,
        indicators: true,
        prevArrow: <></>,
        nextArrow: <></>,
        responsive: [
            {
                breakpoint: 1078,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 553,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };

    return (
        <section className="section suggest-part">
            <div >
                <ul className="suggest-slider slider-arrow">
                    <Slide {...properties}>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={vegetables} alt="vegetables suggest" />
                                <h5>
                                    <span>vegetables</span>
                                    <span>34 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={fruits} alt="fruits suggest" />
                                <h5>
                                    <span>fruits</span>
                                    <span>89 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={groceries} alt="groceries suggest" />
                                <h5>
                                    <span>groceries</span>
                                    <span>45 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={dairy_farm} alt="dairy farm suggest" />
                                <h5>
                                    <span>dairy farm</span>
                                    <span>83 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={sea_foods} alt="sea foods suggest" />
                                <h5>
                                    sea foods
                                    <span>40 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={vegan_foods} alt="vegan foods suggest" />
                                <h5>
                                    <span>vegan foods</span>
                                    <span>57 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={dry_foods} alt="dry foods suggest" />
                                <h5>
                                    <span>dry foods</span>
                                    <span>23 items</span>
                                </h5>
                            </a>
                        </li>
                        <li>
                            <a className="suggest-card" href="shop-4column.html">
                                <img src={fast_foods} alt="fast foods suggest" />
                                <h5>
                                    <span>fast foods</span>
                                    <span>97 items</span>
                                </h5>
                            </a>
                        </li>
                    </Slide>
                </ul>
            </div>
        </section>
    )
}
