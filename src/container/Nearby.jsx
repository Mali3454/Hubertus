import React from 'react'
import Title from '../components/Title'

import { BsWater, BsShop } from 'react-icons/bs'
import { FaCity, FaCoffee, FaBeer, FaChurch, FaSwimmingPool } from 'react-icons/fa'
import { BiRestaurant, BiDrink } from 'react-icons/bi'

const Nearby = () => {
	const points = [
		{ component: <BsWater />, title: 'Morze', distance: '100m' },
		{ component: <FaCity />, title: 'Centrum', distance: '300m' },
		{ component: <BsShop />, title: 'Sklep', distance: '200m' },
		{ component: <BiRestaurant />, title: 'Restauracja', distance: '200m' },
		{ component: <FaCoffee />, title: 'Kawiarnia', distance: '200m' },
		{ component: <FaBeer />, title: 'Pub', distance: '200m' },
		{ component: <FaChurch />, title: 'Kościół', distance: '700m' },
		{ component: <FaSwimmingPool />, title: 'Kąpielisko', distance: '100m' },
		{ component: <BiDrink />, title: 'Bar', distance: '200m' },
	]

	return (
		<div>
			<div className='flex flex-col justify-center items-center'>
				<Title title='Najblizsze punkty' />
			</div>
			<div className='flex flex-row'>
				{points.map((el, i) => {
					return (
						<div key={i} className='flex flex-row justify-center items-center'>
							<div className='w-[100px]'>{el.component}</div>
							<div className='flex flex-col'>
								<h1>{el.title}</h1>
								<p>{el.distance}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Nearby
