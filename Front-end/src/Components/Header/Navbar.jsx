import React, { useEffect, useState, } from 'react'
import{ NavLink } from 'react-router-dom'
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import { Switch } from "@mui/material";
// import {FaBars,} from "react-icons/fa";
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion";


const navLinks = [
    {name: 'Home', route:'/'},
    {name: 'About', route:'/About'},
    {name: 'Services', route:'/Services'},
    {name: 'Clients', route:'/Clients'},
    {name: 'Careers', route:'/Careers'},
    {name:'Contact', route:'/Contact'},
     
]

const theme = createTheme({
    palette:{
        primary:{
            main:"#ff0000",
        },
        secondary:{
            main:"#00ff00",
        },
    },
});

const Navbar = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHome,setIsHome] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] =useState(false)
    const [navBg,setNavBg] = useState('bg-[#15151580]');
    const toggleMobileMenu = () => {

        setIsMobileMenuOpen(!isMobileMenuOpen)
    };
    useEffect(()=>{
        const darkClass = 'dark';
        const root = window.document.documentElement;
        if(isDarkMode){
            root.classList.add(darkClass);
        }
        else{
            root.classList.remove(darkClass);
        }
    },[isDarkMode]);

    useEffect(() =>{
        const handScroll = () =>{
            const currentPosition = window.pageXOffset;
            setScrollPosition(currentPosition);
        };
        window.addEventListener('scroll', handScroll);
        return ()=> window.removeEventListener('scroll', handScroll);
    },[])
    useEffect(() =>{ 
        if(scrollPosition > 100){
            if(isHome){
                setNavBg('bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black')
            }
            else{
                setNavBg('bg-white dark:bg-black dark:text-white text-black')
            }
        }
            else{
                setNavBg(`${isHome || location.path === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} 
                    dark:text-white text-white`)
            }
        }
    ,[scrollPosition]);
    
    
  return (
   <motion.nav 
   initial={{opacity: 0}}
   animate={{opacity: 1}}
   transition={{duration: 0.5}}
   className={`${isHome ? navBg : "bg-white dark:bg-black backdrop-blur-2xl"}${isFixed ?
    'static' : 'fixed'} top-0 transition-colors duration-500 ease-in-out w-full z-10 `}> 
    <div className="lg:w-[100%] mx-auto sm:px-6 lg:px-6 fixed top-0 z-10 ">
        <div className='px-4 py-4 flex items-center justify-between '>
            {/* logo */}
            <div className='flex-shrink-0 cursor-pointer pl-7 md:p-0 items-center '>
                <h1 className='text-2xl inline-flex gap-3 item-center font-bold'>IDA Creations <img src="../../../src/assets/dashboard/IDA.png" alt="" className='w-15 h-10' /> </h1>
           <p className='font-bold text-[9px] tracking-[3px]'>Industrial Design & Animations</p>
            </div>
            {/* Mobile Menu icon */}
            <div className='md:hidden flex items-center pl-4'>
            <div onClick={toggleMobileMenu} className='text-gray-300 hover:text-white focus:outline-none'>
                {isMobileMenuOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3BottomRightIcon className='h-6 w-6' />}
            </div>
            </div>

            {/* Navigation link */}
            <div className=" md:block text-black dark:text-white">
                <div className="flex">
                    <ul className="ml-10 flex items-center space-x-4 pr-4 ">
                        {navLinks.map((link) => (
                            <li key={link.route}>
                                
                                <NavLink 
                                to={link.route}  
                                style={{whiteSpace:'nowrap'}}
                                className={({ isActive }) =>
                     `font-bold ${isActive ? 'text-secondary' :`${navBg.includes('bg-transparent') ? 
                        'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`
                       
                    } >{link.name}</NavLink>
                    
                 
                </li>

                        ))
                    }
                   {/* color toggle */}
                   <li><ThemeProvider theme={theme}>
                    <div className="flex flex-col justify-center items-center">
                        <Switch onChange={()=> setIsDarkMode(!isDarkMode)} />
                            <h1 className='text-[8px]'>Light/Dark</h1>
                    </div>

                    </ThemeProvider>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </motion.nav>
  )
}

export default Navbar
