import { useState } from 'react';
import { close, menu } from '../../../assets';
import { navLinks } from '../../../constants';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
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
                } p-6 sidebar_gradient absolute top-20 right-0 my-2 min-w-[70%] h-full rounded-xl z-[100] sidebar`}
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
                    <span className="w-[90%] h-[1px] border"></span>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar