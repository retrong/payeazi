import React from 'react';
import styles from '../../style';
import Button from '../atoms/Button';

const Navbar = () => {
    const handleClick = () => {
			console.log('Button Clicked');
		};
  return (
		<div className={`${styles.paddingX} py-3`}>
			<nav className="flex justify-between">
				<img src="" alt="Payeazi" className='flex justify-start'/>
				<div className=''>
					<ul className="flex justify-evenly">
						<li className='px-6'>Home</li>
						<li>About</li>
						<li className='px-6'>Feature</li>
					</ul>
				</div>
				<div className=''>
					<Button onClick={handleClick} className="rounded">
						Login
					</Button>
					<Button>Sign Up</Button>
				</div>
			</nav>
		</div>
	);
}

export default Navbar