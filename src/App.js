import React from 'react'
import { Navbar, Header, AboutUs, Rooms, RoomsDetail, Nearby } from './container'

const App = () => {
	return (
		<div className='relative'>
			<Navbar />
			<Header />
			<div className='flex flex-col justify-center items-center'>
				<AboutUs />
				<Rooms />
				<RoomsDetail />
				<Nearby />
			</div>
		</div>
	)
}

export default App
