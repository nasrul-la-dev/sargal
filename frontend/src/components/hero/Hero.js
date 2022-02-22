import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/images/01.png'
import img2 from '../../assets/images/02.png'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
export default function Hero() {

	const slides = [img1, img2];
	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: <div></div>,
        nextArrow: <div></div>
	}

	return (

		<section>
			<div className="banner-part banner-1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6 col-lg-6">
							<div className="banner-content">
								<h1>free home delivery within 24 hours now.</h1>
								<p>
									Lorem ipsum dolor consectetur adipisicing elit modi consequatur eaque expedita porro necessitatibus eveniet voluptatum quis pariatur Laboriosam molestiae architecto excepturi
								</p>
								<div className="banner-btn">
									<a className="btn btn-inline" href="shop-4column.html">
										<FontAwesomeIcon icon={faBasketShopping} />
										<span>shop now</span>
									</a>
									<a className="btn btn-outline" href="offer.html">
										<FontAwesomeIcon icon={faPercent} />
										<span>get offer</span>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 banner-container-img">
							<Fade {...properties}>
								{slides.map((img, index) => (
									<div className="banner-img" key={index}>
										<img src={img} alt={`slide${index}`} />
									</div>
								))}
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</section>



	)
}

