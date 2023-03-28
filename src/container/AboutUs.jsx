import React from 'react'
import { motion } from 'framer-motion'
import Title from '../components/Title'

import { fadeIn } from '../utils/motion'

const AboutUs = () => {
	return (
		<div className='flex flex-col justify-center items-center w-[1200px] pb-[50px]'>
			<Title title='O Nas' />
			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className='text-center text-xl pt-8'>
				W 2017 roku w urokliwym zakątku Pogorzelicy (woj. zachodniopomorskie), wśród sosnowych drzew, wzdłuż deptaku
				prowadzącym do plaży, zostały postawione drewniane domki Hubertus, które stały się miejscem idealnym dla rodzin
				na spędzenie urlopu lub pragnących spędzić wolne dni od zgiełku miasta. Bliskość plaży oraz komfortowe
				wyposażenie sprawiły, że wielu gości powraca do nas każdego roku. Domki Hubertus Pogorzelica jest to kompleks
				sześciu podwójnych domków letniskowych o powierzchni łącznej 58 m2, w tym powierzchni mieszkalnej 46 m2, które
				przyciągają uwagę przechodniów.
			</motion.p>
		</div>
	)
}

export default AboutUs
