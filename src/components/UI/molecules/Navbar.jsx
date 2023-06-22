import { eazilogo } from '../../../assets';
import { navLinks } from '../../../constants';
import styles from '../../style';
import Button from '../atoms/Button';

const Navbar = () => {
    const handleClick = () => {
			console.log('Button Clicked');
		};
  return (
		<nav className={`w-full flex py-6 justify-between items-center`}>
            
			<img src={eazilogo} alt="Payeazi" className="flex justify-start w-[120px] h-[40px]" />

            <div className='sm:flex hidden items-center'>
                <ul className="list-none sm:flex hidden items-center flex-1">
                    {navLinks.map((nav) => (
                        <li 
                            key={nav.id}
                            className={`font-cabin font-normal text-white hover:text-secondary cursor-pointer text-[18px] mr-8`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>

                    ))}
                </ul>

                <div className="">
                    <Button onClick={handleClick} className="">
                        Login
                    </Button>
                    <Button className="">Sign Up</Button>
                </div>
            </div>

		</nav>
	);
};

export default Navbar