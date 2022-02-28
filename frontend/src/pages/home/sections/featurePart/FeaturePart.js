import React from 'react'
import './FeaturePart.css'
import { products } from '../../../../data.js'
import {FeatureCard} from '../../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'

export default function FeaturePart() {

    return (
        <section className="section feature-part">
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading my-4">
                            <h1>Nos articles vedettes</h1>
                        </div>
                    </div>
                </div>
                <div className='row d-flex flex-wrap justify-content-center mb-3'>
                    {products.map(product => {
                        return (
                            <FeatureCard key={product.id} {...product} />
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
            </div>
        </section>
    )
}
