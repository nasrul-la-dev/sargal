import React from 'react'
import { fruits } from '../../../../data.js'
import { ProductCard } from '../../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './CollectedNew.css'
import juskiwi from '../../../../assets/images/juskiwi.png'
import orangejus from '../../../../assets/images/jusorange.png'
export default function CollectedNew() {
    return (
        <section className="section newitem-part">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-heading">
                            <h2>collected new items</h2>
                        </div>
                    </div>
                </div>
                <div className='row newitem-product'>
                    {fruits.map(product => {
                        return (
                            <ProductCard key={product.id} {...product} />
                        )
                    })}
                </div>
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a href="shop-4column.html" className="btn btn-outline">
                                <FontAwesomeIcon icon={faEye} />
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='newitem-promo'>

                    <div className='newitem-promo-1'>
                        <div className='element_1'>
                            <img src={orangejus} />
                        </div>
                        <div className='element_2'>
                            <h3>
                                Yormal Juice
                            </h3>
                            <p>
                                Lorem ipsum dolor consectetur adipisicing
                                elit modi consequatur eaque expedita porro
                                necessitatibus eveniet voluptatum quis pariatur
                                Laboriosam molestiae architecto excepturi
                            </p>
                        </div>
                    </div>

                    <div className='newitem-promo-2'>
                        <div className='element_1'>
                            <img src={juskiwi} />
                        </div>
                        <div className='element_2 element_2--green'>
                            <h3>
                                Yormal Juice
                            </h3>
                            <p>
                                Lorem ipsum dolor consectetur adipisicing
                                elit modi consequatur eaque expedita porro
                                necessitatibus eveniet voluptatum quis pariatur
                                Laboriosam molestiae architecto excepturi
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
