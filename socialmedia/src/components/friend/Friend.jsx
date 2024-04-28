import React from 'react'

function Friend({profile}) {

  const PF="http://localhost:8800/images/"

  return (
    <li className='flex  items-center mb-4'>
     <img src={PF+profile.profilePicture} alt='pic3' className='w-10 h-10 rounded-full mr-3' style={{objectFit:'cover'}} />
     <span>{profile.username}</span>
    </li>
  )
}

export default Friend