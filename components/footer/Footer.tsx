import React from 'react'
import QuickLinks from './QuickLinks'
import FooterContent from './FooterContent'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <footer className='bg-[#002A3A]'>
        <QuickLinks />
        <FooterContent />
        <Copyright />
    </footer>
  )
}

export default Footer