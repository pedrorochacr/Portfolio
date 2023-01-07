




import Link from 'next/link'
import { useState } from 'react'
import headerStyles from '../styles/Menu.module.css'
import MenuMobile from './menuMobile'

export default function Menu() {
  
  return (
    <>
       
       <MenuMobile></MenuMobile>
        <nav className={headerStyles.header}>
              <Link href="/">Home</Link>
              <Link href="#servico">Serviços</Link>
              <Link href="#portfolio">Projetos</Link>
              <Link href="#servico">Contato</Link>
        </nav>
        
    </>
        
  )
  

}

