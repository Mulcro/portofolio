import React,{useRef,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import { styles } from '../style';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {
    const [active,setActive] = useState("");
    const [toggle,setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-black/50` }>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0,0);
                    }}
                >
                    <img src={logo} alt="" className="w-9 h-9 object-contain"/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>Mulero &nbsp;<span className='sm:block hidden '>| Alamou</span></p>
                
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map(link => (
                        <li key={link.id} 
                            className={`${link.title === active ? "rounded text-white bg-blue-500/60" : "text-secondary" } px-3 py-1.5 hover:text-[18px] transition-all duration-250 ease-in-out`}
                            
                            onClick={() => {setActive(link.title);}}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div
                    className={`sm:hidden flex flex-1 justify-end items-center gap-2 cursor-pointer`}
                >
                    <img src={menu} className={`${toggle ? "hidden" : ""} w-[20px] h-[20px] object-contain cursor-pointer`}
                        onClick={() => {setToggle(!toggle);}}
                    />
                    <img src={close} className={`${!toggle ? "hidden" : ""} w-[20px] h-[20px] object-contain cursor-pointer`}
                        onClick={() => {setToggle(!toggle);}}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-gradient-to-r from-black via-black  absolute top-[4rem] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
                        <ul className='list-none flex justify-end flex-col gap-4'>
                        {navLinks.map(link => (
                            <li key={link.id} 
                                className={`${link.title === active ? "rounded text-white bg-gradient-to-r from-blue-500" : "text-secondary" } font-poppins font-medium cursor-pointer px-3 py-1.5 hover:text-[18px] transition-all duration-250 ease-in-out`}
                                
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(link.title);
                                }}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
