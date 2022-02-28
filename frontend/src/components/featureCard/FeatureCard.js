import React, { useState, createRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart, faShuffle, faStar, faBasketShopping, faMinus, faPlus
} from '@fortawesome/free-solid-svg-icons'
import { faEye, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import {v4 as uuidv4 } from 'uuid';
import './FeatureCard.css'

import Modal from 'react-bootstrap/Modal'
export default function FeatureCard(props) {
    const [compareProduct, setCompareProduct] = useState(false);
    const [viewProduct, setViewProduct] = useState(false);
    const [wishProduct, setWishProduct] = useState(false);
    const [showAction, setShowAction] = useState(true);
    const orderQuantity = createRef();


    const handleWishingProduct = () => {
        setWishProduct(value => !value)
    }
    const handleShowAction = () => {
        setShowAction(value => !value)
    }

    const handleOrderQuantity = (action) => {
        const inputElement = orderQuantity.current;
        let currentValue = parseInt(inputElement.value)
        if (currentValue >= 0) {
            if (action === 'plus') {
                currentValue += 1;
                inputElement.value = `${currentValue}`;
            }
            if (action === 'minus') {
                currentValue -= 1;
                if (currentValue <= 0) {
                    currentValue = 0;
                }
                inputElement.value = `${currentValue}`;
            }
        }
    }
    return (
        <div className="product-card">
            <div className="product-media" >
                <div className="product-labels">
                    <label className="label-new">Nouveaté</label>
                    <label className="product-wish" onClick={() => handleWishingProduct()}>
                        {wishProduct ?
                            <FontAwesomeIcon className="wish wish_2" icon={faHeart} />
                            :
                            <FontAwesomeIcon className="wish wish_1" icon={faHeart} />
                        }

                    </label>
                </div>
                <div className="product-image-container">
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
            <div className="product-content" >
                <div className="product-rating pt-3 pb-2">
                    <FontAwesomeIcon className="icon-star" icon={faStar} />
                    <FontAwesomeIcon className="icon-star" icon={faStar} />
                    <FontAwesomeIcon className="icon-star" icon={faStar} />
                    <FontAwesomeIcon className="icon-star" icon={faStarHalfStroke} />
                    <span>(3)</span>
                </div>
                <h6 className="product-name">
                    <a href="/">{props.name}</a>
                </h6>
                <h6 className="product-price mb-3">
                    {props.promo_price != null ?
                        <>
                            <del className='normal_price'>${props.normal_price}</del>&nbsp;&nbsp;
                            <span>${props.promo_price}<small>/piece</small></span>
                        </>
                        : <span>
                            ${props.normal_price}
                        </span>
                    }
                </h6>
                <div className="product-action">
                    {showAction ?
                        <button className="product-add mb-3" title="Ajouter au panier" onClick={() => handleShowAction()}>
                            <span><FontAwesomeIcon icon={faBasketShopping} />&nbsp;Ajouter</span>
                        </button>
                        :
                        <>
                            <button className="action-minus" title="Diminuer la quantité" onClick={() => handleOrderQuantity('minus')}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input ref={orderQuantity} className="action-input" title="Quantité actuelle" type="text" name="quantity" defaultValue='1' />
                            <button className="action-plus" title="Augmenter la quantité" onClick={() => handleOrderQuantity('plus')}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
