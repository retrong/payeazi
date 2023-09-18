import { Link } from 'react-router-dom';
import { eazilogo } from '../../../assets';
import { navLinks } from '../../../constants';
import Button from '../atoms/Button';
import Sidebar from './Sidebar';

const Navbar = () => {
    const handleClick = () => {
			console.log('Button Clicked');
		};
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
							className={`font-cabin font-normal text-white hover:text-[#f9fbdf] cursor-pointer text-[18px] ${
								index === navLinks.length - 1 ? 'mr-12' : 'mr-10'
							}`}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

                <Link to="/signin">
                    <Button onClick={handleClick} className="">
                        SIGN UP
                    </Button>
                </Link>

			</div>

			<Sidebar />
		</nav>
	);
};

export default Navbar