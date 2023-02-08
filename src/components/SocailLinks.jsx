import React from 'react'
import {FaGithub , FaLinkedin ,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocailLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} /> 
                </> 
            ),
            href:'https://www.linkedin.com/in/prateek-giri-114680183/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30} /> 
                </> 
            ),
            href:'https://github.com/Prateek4546',
          
        }
        ,{
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30} /> 
                </> 
            ),
            href:'mailto:foo.gmail.com',
        }
        ,{
            id:4,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={30} /> 
                </> 
            ),
            href:'./PRATEEK-GIRI-RESUME-2023.pdf',
            style: 'rounded-br-md',
            download : true,
            
        }
    ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id , child , href , style , download}) =>(
                  <li key={id}
                   className={"flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ml-[-100px] " + style } >

                      <a href={href} className='flex justify-between items-center w-full text-white'
                       download={download}
                       target='_blank'
                       rel="noreferrer"
                      > 
                      {child} 
                      </a>
                  </li>
            ))}
           
        </ul>
    </div>
  )
}

export default SocailLinks