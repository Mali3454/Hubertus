import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

import { room1, room2, room3, room4, room5, room6 } from '../assets/rooms'
import Title from '../components/Title'

const RoomsDetail = () => {
	const room = [
		{
			img: room1,
			alt: 'salon',
			title: 'Salon',
			devices: [
				'rozkładana, narożna sofa z funkcją spania dla dwóch osób',
				'telewizor',
				'stół jadalniany z krzesłam',
				'stolik kawowy',
			],
			property: 'right',
		},
		{
			img: room2,
			alt: 'bathroom',
			title: 'Łazienka',
			devices: [
				'prysznic',
				'toaleta',
				'półka łazienkowa',
				'szafka łazienkowa z umywalką',
				'suszarka do prania',
				'pralka',
			],
			property: 'left',
		},
		{
			img: room3,
			alt: 'kitchen',
			title: 'Aneks kuchenny',
			devices: [
				`pełny komplet akcesoriów kuchennych do gotowania i smażenia
				(sztućce, talerze, szklanki, zestaw noży kuchennych, deski do krojenia, komplet garnków i patelni)`,
				'czajnik elektryczny',
				'płyta elektryczna z 2 polami grzewczymi',
				'lodówka',
			],
			property: 'right',
		},
		{
			img: room4,
			alt: 'bedroom1',
			title: 'Sypialnia I',
			devices: [
				`sypialnia na piętrze z podwójnym łóżkiem małżeńskim, wyposażona w kołdry, poduszki, pościel`,
				'2 stoliki z lampkami nocnymi',
				'komoda',
			],
			property: 'left',
		},
		{
			img: room5,
			alt: 'bedroom1',
			title: 'Sypialnia II',
			devices: [
				`sypialnia na piętrze z 2 pojedynczymi łóżka, wyposażona w kołdry, poduszki, pościel`,
				'2 stoliki z lampkami nocnymi',
				'szafa',
			],
			property: 'right',
		},
		{
			img: room6,
			alt: 'taras',
			title: 'Taras',
			devices: [`meble tarasowe`, 'grill węglowy'],
			property: 'left',
		},
	]

	return (
		<div className='flex flex-col py-[100px] w-[1200px] justify-center items-center'>
			{room.map((el, i) => {
				return (
					<motion.div
						variants={fadeIn(`${el.property === 'left' ? 'left' : 'right'}`, 'tween', 0.2, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.25 }}
						className={`flex ${
							el.property === 'left' ? 'flex-row' : 'flex-row-reverse'
						}  justify-center py-[80px] px-10 gap-[100px]`}
						key={i}>
						<img src={el.img} alt={el.alt} className='h-[400px] shadow-[47px_-54px_0_-5px_rgba(255,232,0,1)] ' />
						<div className='flex flex-col justify-center items-center'>
							<h1 className='text-3xl pb-10'>{el.title}</h1>
							<ul className={`text-xl text-left`}>
								{el.devices.map(element => {
									return (
										<li>
											<span className='text-[#FFE800]'>•</span> {element}
										</li>
									)
								})}
							</ul>
						</div>
					</motion.div>
				)
			})}
			<div className='pb-[50px]'>
				<Title title='Zapraszamy do rezerwacji od maja do września.' />
			</div>
			<div className='flex flex-col justify-center text-center'>
				<h1 className='text-3xl pb-5'>Informacje dodatkowe</h1>
				<ul className='text-xl '>
					<li>
						<span className='text-[#FFE800]'>•</span> W dniu przyjazdu pobierana jest kaucja w wysokości 400 zł na
						wypadek ewentualnych szkód. Kaucja zwracana jest w dniu wyjazdu – po sprawdzeniu stanu pokoju.
					</li>
					<li>
						<span className='text-[#FFE800]'>•</span> Należność za pobyt jest rozliczana w dniu przyjazdu.
					</li>
					<li>
						<span className='text-[#FFE800]'>•</span> W sezonie wysokim obowiązują turnusy tygodniowe – rozpoczynające
						się i kończące w soboty.
					</li>
					<li>
						<span className='text-[#FFE800]'>•</span> Pobyt rozpoczyna się od godziny 16:00 w dniu przyjazdu, a kończy o
						10:00 w dniu wyjazdu.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default RoomsDetail
