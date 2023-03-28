import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './carousel.css'

import { room1, room2, room3, room4, room5, room6, room7, room8, room9 } from '../assets'

const CarouselRooms = () => {
	const roomImg = [
		{ img: room1, alt: 'room1' },
		{ img: room2, alt: 'room2' },
		{ img: room3, alt: 'room3' },
		{ img: room4, alt: 'room4' },
		{ img: room5, alt: 'room5' },
		{ img: room6, alt: 'room6' },
		{ img: room7, alt: 'room7' },
		{ img: room8, alt: 'room8' },
		{ img: room9, alt: 'room9' },
	]

	return (
		<div className='w-[700px] '>
			<Swiper
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					dynamicBullets: true,
				}}
				navigation={true}
				modules={[EffectFade, Autoplay, Pagination, Navigation]}
				effect='fade'
				loop={true}
				className='mySwiper '>
				{roomImg.map((i, el) => {
					return (
						<SwiperSlide>
							<div className=''>
								<img src={i.img} alt={i.alt} key={el} className='rounded-xl brightness-75' />
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default CarouselRooms
