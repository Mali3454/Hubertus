import React from 'react'
import CarouselHero from '../components/CarouselHero'
import { motion } from 'framer-motion'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { fadeIn } from '../utils/motion'

const Header = () => {
	return (
		<section className='relative'>
			<CarouselHero />
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className='absolute  top-[65%]  z-[1000] bg-black/50 px-[150px] rounded backdrop-blur-sm'>
				<h1 className='text-[60px] text-slate-100 drop-shadow-2xl'>
					Niezwykłe miejsce <br /> nad morzem
				</h1>
			</motion.div>
			<motion.div
				className='cursor-pointer h-[80px] w-[80px] absolute left-[50%] top-[90%] z-[1000]'
				animate={{ y: [0, 0, -30, -0, -15, 0, 0] }}
				transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
				<MdKeyboardArrowDown className=' fill-slate-100 h-[80px] w-[80px]' />
			</motion.div>
		</section>
	)
}

export default Header
