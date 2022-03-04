import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faStar, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { ProductCard } from '../../../../components';
import { fruits, products} from '../../../../data.js';
import './NichPart.css'
export default function NichPart() {
    const [key, setKey] = useState('home');

    return (
        <section>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="section-heading">
                            <h2>Browse By Top Niche</h2>
                        </div>
                    </div>
                </div>
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="container mb-3 te"

                >
                    <Tab
                        eventKey="home"
                        title={<span className='h5'><FontAwesomeIcon icon={faTags} />&ensp;TOP ORDER</span>}
                    >
                        <div className='row newitem-product'>
                            {fruits.map(product => {
                                return (
                                    <ProductCard key={product.id} {...product} />
                                )
                            })}
                        </div>
                    </Tab>
                    <Tab
                        eventKey="profile"
                        title={<span className='h5'><FontAwesomeIcon icon={faStar} />&ensp;TOP RATING</span>}
                    >
                        <div className='row newitem-product'>
                            {products.map(product => {
                                return (
                                    <ProductCard key={product.id} {...product} />
                                )
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="contact"
                        title={<span className='h5'><FontAwesomeIcon icon={faCertificate} />&ensp;TOP DISCOUNT</span>}
                    >
                        <div className='row newitem-product'>
                            {fruits.map(product => {
                                return (
                                    <ProductCard key={product.id} {...product} />
                                )
                            })}
                        </div>
                        
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
}
