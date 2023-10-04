import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {logo , sun} from '../assets'
import { navlinks } from '../constants'



const Sidebar = () => {
    const navigate  = useNavigate() ;
    const [isActive , setIsActive ] = useState('dashboard')

    const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
        <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} `} onClick={handleClick}>
          {!isActive ? (
            <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
          ) : (
            <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
          )}
        </div>
      )



  return (
    <div className="">
    <Link to="/">
        
    </Link>
    
  
        <div className="flex flex-row md:ml-[40.5rem] mt-[-5rem] gap-5 ">
          {navlinks.map((link) => (
            <Icon 
             
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
     

        
      </div>
    </div>
  )
}

export default Sidebar