import React from 'react'
import './RecentPart.css'
import { products } from '../../../../data.js'
import { ProductCard } from '../../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import promo_img from '../../../../assets/images/promo_img.png'
export default function RecentPart() {

    return (
        <section className="section recent-part">
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading my-4">
                            <h1>Articles récemment vendus</h1>
                        </div>
                    </div>
                </div>
                <div className='row d-flex flex-wrap justify-content-center mb-3'>
                    {products.map(product => {
                        return (
                            <ProductCard key={product.id} {...product} />
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a href="shop-4column.html" className="btn btn-outline">
                                <FontAwesomeIcon icon={faEye}/>
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="prom-img col-lg-12">
                        <a href='/'><img src={promo_img} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
