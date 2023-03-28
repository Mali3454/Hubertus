import React from 'react'
import { motion } from 'framer-motion'

import { zoomIn } from '../utils/motion'

const Title = ({ title }) => {
	return (
		<motion.div variants={zoomIn(0, 2)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
			<h1 className='text-3xl uppercase text-[#F8AC0B] border-[#F8AC0B] border-t-4 mt-20 '>{title}</h1>
		</motion.div>
	)
}

export default Title
