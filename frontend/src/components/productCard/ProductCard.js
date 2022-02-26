import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart as filledHeart,
    faShuffle,
    faStar,
    faBasketShopping
} from '@fortawesome/free-solid-svg-icons'
import {
    faHeart as emptyHeart,
    faEye,
    faStarHalfStroke
} from '@fortawesome/free-regular-svg-icons'
import { v4 as uuidv4 } from 'uuid';

import Modal from 'react-bootstrap/Modal'
export default function ProductCard(props) {
    const [compareProduct, setCompareProduct] = useState(false);
    const [viewProduct, setViewProduct] = useState(false);
    return (
        <div>
            <div className="product-card">
                <div className="product-media">
                    <div className="product-labels">
                        <label className="label-text">Nouveaté</label>
                        <label className="product-wish wish">
                            <FontAwesomeIcon icon={filledHeart} />
                            <FontAwesomeIcon icon={emptyHeart} />
                        </label>
                    </div>
                    <div>
                        <a className="product-image" href="/">
                            <img src={process.env.PUBLIC_URL + `/${props.img}`} alt="product" />
                        </a>
                        <div className="product-widget">
                            <p title="Comparer ce produit" onClick={() => setCompareProduct(true)}>
                                <FontAwesomeIcon icon={faShuffle} />
                            </p>
                            <p title="Voir ce produit" onClick={() => setViewProduct(true)}>
                                <FontAwesomeIcon icon={faEye} />
                            </p>
                            <Modal
                                size="lg"
                                show={compareProduct}
                                onHide={() => setCompareProduct(false)}
                                aria-labelledby="Tableau de comparaison de ce produit avec d'autres de mêmes natures"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id={uuidv4()}>
                                        Compare Product
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                            <Modal
                                size="lg"
                                show={viewProduct}
                                onHide={() => setViewProduct(false)}
                                aria-labelledby="Détails du produit"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id={uuidv4()}>
                                        Large Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <span>(3)</span>
                    </div>
                    <h6 className="product-name">
                        <a href="/">{props.name}</a>
                    </h6>
                    <h6 className="product-price">
                        <del>
                            ${props.normal_price}
                        </del>
                        <span>
                            {props.promo_price && `$${props.promo_price}`}<small>/piece</small>
                        </span>
                    </h6>
                    <button className="product-add" title="Ajouter au panier">
                        <i className="fas fa-shopping-basket"></i>
                        <span><FontAwesomeIcon icon={faBasketShopping} />Ajouter</span>
                    </button>
                    <div className="product-action">
                        <button className="action-minus" title="Diminuer la quantité"><i className="icofont-minus"></i></button>
                        <input className="action-input" title="Quantité actuelle" type="text" name="quantity" value="1" />
                        <button className="action-plus" title="Augmenter la quantité"><i className="icofont-plus"></i></button>
                    </div>
                </div>
            </div>
        </div >
    )
}
