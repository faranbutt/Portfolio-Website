'use client'
import Image from "next/image";
import Link from "next/link";
import {navLinks} from '../constants'
import { useState } from "react";
import { styles } from "../styles";
import {menu, close} from '../assets'
export default function Navbar() {
  const [active, setActive] = useState()
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link className="flex items-center gap-2" href={"/"} onClick={()=>{setActive('');window.scrollTo(0,0)}} 
        >
          <Image src={"/logo.png"} alt='logo' height={100} width={100} className='object-contain' />
          <div className="text-white text-[18px] font-bold cursor-pointer flex flex-col">
            Faran Butt &nbsp;
            <span className="text-[12px]">Software Engineer</span>
            </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)} >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image src={toggle ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain cursor-pointer" 
          onClick={()=> setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } font-poppins font-medium cursor-pointer text-[16px]`} 
            onClick={()=>{
              setToggle(!toggle);    
              setActive(link.title);
                    }}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
