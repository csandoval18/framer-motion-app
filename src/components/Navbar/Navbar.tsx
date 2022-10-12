import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { GrFreebsd } from 'react-icons/gr'

const Navbar: React.FC = () => {
	return (
		<nav>
			<Link to='/'>
				<GrFreebsd className='logo'></GrFreebsd>
			</Link>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<Link className='' to='/about-us'>
						About Us
					</Link>
				</li>
        <li>
					<Link className='' to='/contact-us'>
            Contact Us
					</Link>
        </li>

			</ul>
		</nav>
	)
}

export default Navbar
