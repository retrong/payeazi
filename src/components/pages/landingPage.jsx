import React from 'react';
import { Button } from '../UI/atoms/Button';

const landingPage = () => {
	return (
		<>
			<nav className="bg-black ">
				<ul className='flex flex-row text-sky-400'>
					<li>Home</li>
					<li>About</li>
					<li>Feature</li>
				</ul>
				<Button className="rounded" />
			</nav>
		</>
	);
};

export default landingPage;
