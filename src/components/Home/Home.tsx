import { motion } from 'framer-motion';
import React from 'react';
import Card from '../Card/Card';
import './Home.scss';

const Home: React.FC = () => {
	return (
		<div className='home-container'>
			<motion.div
				className='hero'
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2 }}
			>
				<div className='left-pane'>
					<h1>Framer Motion Demo</h1>
				</div>
			</motion.div>

			<motion.div>
				<Card
					title='Title Placeholder'
					text=' 
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate velit quaerat possimus dolorum dolores numquam maiores neque eius rem saepe laboriosam reiciendis fuga eum, sapiente error incidunt nostrum iure optio.'
				/>
			</motion.div>
		</div>
	);
};

export default Home;
