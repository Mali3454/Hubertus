import React from 'react'
import { motion } from 'framer-motion'

import CarouselRooms from '../components/CarouselRooms'
import Title from '../components/Title'
import { fadeIn } from '../utils/motion'

const Rooms = () => {
	return (
		<div className="relative flex flex-col px-[200px] pb-10 justify-center items-center bg-[url('assets/bg1.jpg')] bg-cover bg-no-repeat bg-bottom">
			<Title title='Domki' />
			<div className='flex py-10 px-[100px] flex-row gap-[100px] drop-shadow-2xl'>
				<motion.div
					variants={fadeIn('right', 'tween', 0.2, 1)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.25 }} >
					<CarouselRooms />
				</motion.div>
				<motion.div
					variants={fadeIn('left', 'tween', 0.2, 1)}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.25 }}>
					<p className='text-slate-200 text-2xl text-center drop-shadow-2xl'>
						Oferowane przez nas domki przeznaczone są dla czterech osób, ale z powodzeniem zmieści się w nim 6 osób, pod
						warunkiem jednak, że intymność nie jest dla Państwa kwestią pierwszorzędną, bowiem składają się z dwóch
						sypialni na 1 piętrze oraz pokoju dziennego z aneksem kuchennym I łazienką na parterze. <br></br>
						<br></br>
						Każdy domek jest funkcjonalnie i komfortowo wyposażony. W aneksie kuchennym znajdą Państwo wszystkie
						potrzebne sprzęty i przedmioty codziennego użytku, w tym pralkę. Na ogrodzonym, monitorowanym terenie
						znajduje się plac zabaw dla dzieci i parking.
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default Rooms
