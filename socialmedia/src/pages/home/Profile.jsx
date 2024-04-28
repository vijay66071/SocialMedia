import React, { useEffect, useState  } from 'react'
import Header from '../../components/topbar/Header'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Profile() {
    const [user,setUser]=useState({})
    const username=useParams().username;
    const PF="http://localhost:8800/images/"
    useEffect(() => {
        axios.get(`http://localhost:8800/api/users?username=${username}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching data:', error));
      }, [username]);
  return (
    <>
    <Header />
    
    <div className='flex '>
        <Leftbar />
        <div className='flex-[9]'>
            <div id="profiletop">
                <div className='h-80 relative'>
                <img src={user.coverPicture?PF+user.coverPicture:""} className='w-full h-64 object-cover ' />
                <img src={user.profilePicture?PF+user.profilePicture:""} className='w-40 h-40 rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[5px] border-black' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h3 className='text-2xl font-medium'>{user.username}</h3>
                    <span className='font-light'>{user.desc}</span>
                </div>
            </div>
            <div id="profilebottom" className='flex'>
                <Feed username={username}/>
                <Rightbar user={user} />
            </div>
    

        </div>
    </div>

    </>
  )
}
