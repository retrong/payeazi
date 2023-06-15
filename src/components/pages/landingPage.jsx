import React from 'react';
import Button from '../UI/atoms/Button';

const landingPage = () => {
    const handleClick = () => {
        console.log('Button Clicked');
    }
	return (
		<div>
			<nav className="">
				<ul className='flex flex-row text-sky-400'>
					<li>Home</li>
					<li>About</li>
					<li>Feature</li>
				</ul>
                <Button onClick={handleClick}>Login</Button>
			</nav>
		</div>
	);
};

export default landingPage;
