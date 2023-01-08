
import { FiAlignJustify } from 'react-icons/fi'
import Link from 'next/link'
import styles from '../styles/MenuMobile.module.css'
import { useState } from 'react'

function renderLinks(menuVisible: boolean){
        if(menuVisible){
            return(
                <>
                    <Link href="/">Home</Link>
                        <Link href="#servico">Serviços</Link>
                        <Link href="#portfolio">Projetos</Link>
                       
                </>
            )
        }
        
}
export default function MenuMobile() {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <>
            <div className={styles.menuMobile}>
                    <button onClick={()=>setMenuVisible(!menuVisible)}>
                        <FiAlignJustify size={45}></FiAlignJustify>
                    </button>
                        {renderLinks(menuVisible)}
            </div>
            
        </>

    )
}

