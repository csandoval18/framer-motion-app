import React from 'react';
import './Card.scss';

interface CardProps {
	title?: String;
	text?: String;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<span></span>
			<p>{text}</p>
		</div>
	);
};

export default Card;
