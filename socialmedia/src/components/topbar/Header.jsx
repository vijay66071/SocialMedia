import React, { useContext } from 'react';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import pic from "../../../assets/profile/pic2.jpeg"; // Import the image
import 'tailwindcss/tailwind.css';
import {Link}from "react-router-dom"
import {Authcontext} from "../../context/authcontext"
function Header() {
  const {user}=useContext(Authcontext)
  const PF="http://localhost:8800/images/"
  return (
    <div className='h-14 w-full bg-blue-600 flex items-center sticky top-0 z-[999]'>



      <div id="headerleft" className='flex flex-grow '>
        <Link to="/">
        <span id="logo" className="text-lg ml-5 font-bold text-white cursor-pointer">HappYial</span>
        </Link>
      </div>




      <div id="headercenter" className='flex flex-grow'>
        <div id="searchbar" className='w-full h-8 bg-white rounded-3xl flex items-center'>
          <Search className='text-lg ml-3'/>
          <input placeholder='search for friend, post, or video' className='border-none w-4/5 outline-none'></input>
        </div>
      </div>



      <div id="headerright" className=' flex flex-grow items-center justify-around'>
                <div id="topbarlinks" className='mr-3 text-xs cursor-pointer'>
                  <span id="topbarlink" className='mr-3 text-lg text-white cursor-pointer'>Homepage</span>
                  <span id="topbarlink" className='mr-3 text-lg text-white cursor-pointer'>Timeline</span>
                </div>

                <div id="topbaricon" className='flex '>
                      <div id="topbariconitem" className='mr-4 cursor-pointer relative'>
                        <Person />
                        <span id="topbaruiconbadge" className='flex items-center justify-center w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1 -right-1 text-xs'>1</span>

                      </div>

                      <div id="topbariconitem" className='mr-4 cursor-pointer relative'>
                        <Chat />
                        <span id="topbaruiconbadge" className='flex items-center justify-center w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1 -right-1 text-xs'>2</span>
                      </div>

                      <div id="topbariconitem" className='mr-4 cursor-pointer relative'>
                        <Notifications />
                        <span id="topbaruiconbadge" className='flex items-center justify-center w-4 h-4 bg-red-500 rounded-full text-white absolute -top-1 -right-1 text-xs'>1</span>
                      </div>
                </div>
                  <Link to={`/profile/${user.username }`}>
                 <img src="http://localhost:8800/images//profile/pic2.jpeg" alt="Profile Pic" id="topbarimg" className='w-8 h-8 rounded-full cursor-pointer' style={{objectFit:'cover'}}/> {/* Use imported image */}
                  </Link>
      </div>



    </div>
  );
}

export default Header;
