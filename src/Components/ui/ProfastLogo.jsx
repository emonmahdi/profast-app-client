import React from 'react'
import logoImg from  '../../assets/logo.png'

const ProFastLogo = () => {
  return (
    <div className='flex items-end'>
        <img src={logoImg} alt="logo text" />
        <span className='-ml-3 text-2xl font-extrabold'>Profast</span>
    </div>
  )
}

export default ProFastLogo