import { motion } from 'framer-motion'
import React from 'react'
import './Home.scss'

const Home: React.FC = () => {
	return (
		<div>
			<motion.div
				className='hero'
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2 }}
			/>

			<div className='card'>title</div>
		</div>
	)
}

export default Home
