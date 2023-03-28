import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

import { hero1, hero2, hero3, hero4, hero5 } from '../assets'

const CarouselHero = () => {
	const heroImg = [
		{ img: hero1, alt: 'hero1' },
		{ img: hero2, alt: 'hero2' },
		{ img: hero3, alt: 'hero3' },
		{ img: hero4, alt: 'hero4' },
		{ img: hero5, alt: 'hero5' },
	]

	return (
		<Swiper
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
			}}
			slidesPerView={1}
			spaceBetween={30}
			modules={[EffectFade, Autoplay]}
			effect='fade'
			loop={true}
			className='mySwiper'>
			{heroImg.map((i, el) => {
				return (
					<SwiperSlide>
						<div className=''>
							<img src={i.img} alt={i.alt} key={el} className='w-full h-screen brightness-[60%] ' />
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default CarouselHero
