import React from 'react'
import { motion } from 'framer-motion'

import { logo } from '../assets'

const Navbar = () => {
	const btn =
		'text-center text-slate-100 transparent hover:text-blue-300 hover:border-blue-300 py-2 px-4 text-3xl transition duration-700 border border-slate-100 rounded shadow '
	return (
		<motion.nav
			variants={{
				hidden: {
					opacity: 0,
					y: -50,
					transition: {
						type: 'spring',
						stiffness: 300,
						damping: 140,
					},
				},
				show: {
					opacity: 1,
					y: 0,
					transition: {
						type: 'spring',
						stiffness: 80,
						delay: 0,
					},
				},
			}}
			initial='hidden'
			whileInView='show'
			className={`py-8 absolute inset-x-0.5 z-10`}>
			<div className='flex w-full justify-between items-center h-30 z-10 gap-11 px-[80px]'>
				<div className='flex flex-row gap-10 items-center '>
					<a href='#home' className={btn}>
						Menu
					</a>
				</div>
				<img src={logo} className='w-[600px] ' alt='logo' />
				<div className='flex flex-row gap-10 items-center'>
					<a href='#contact' className={btn}>
						Book now
					</a>
				</div>
			</div>
		</motion.nav>
	)
}

export default Navbar
