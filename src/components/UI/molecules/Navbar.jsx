import { useState } from 'react';
import { close, eazilogo, menu } from '../../../assets';
import { navLinks } from '../../../constants';
import Button from '../atoms/Button';

const Navbar = () => {
    const handleClick = () => {
			console.log('Button Clicked');
		};
    const [toggle, setToggle] = useState(false);
  return (
		<nav className={`w-full flex py-6 justify-between items-center`}>
			<img
				src={eazilogo}
				alt="Payeazi"
				className="flex justify-start w-[120px] h-[40px]"
			/>

			<div className="sm:flex hidden items-center">
				<ul className="list-none sm:flex hidden items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-cabin font-normal text-white hover:text-secondary cursor-pointer text-[18px] ${
								index === navLinks.length - 1 ? 'mr-12' : 'mr-10'
							}`}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<Button onClick={handleClick} className="">
					SIGN UP
				</Button>
			</div>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-secondary absolute top-20 right-0 my-2 min-w-[80%] h-full sidebar`}
				>
					<ul className="list-none flex flex-col items-center flex-1">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-cabin font-normal text-white hover:text-primary cursor-pointer text-[18px] ${
									index === navLinks.length - 1 ? 'mb-8' : 'mb-6'
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
                        <span className='w-[90%] h-[1px] border'></span>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar