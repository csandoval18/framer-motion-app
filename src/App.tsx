import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import AboutUs from './components/AboutUs/AboutUs'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/animation-1' element={<AboutUs />} />
			</Routes>
		</div>
	)
}

export default App
