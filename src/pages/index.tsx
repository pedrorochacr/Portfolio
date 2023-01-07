
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoslinkedinIcon from "../assets/logos_linkedin-icon.png";
import logosgithubIcon from "../assets/logos_github-icon.png";
import Menu from '../components/menu'
import background from '../assets/fundo.png'
import Sobre from '../components/description';
import Footer from '../components/footer';
import Link from 'next/link';
import Portfolio from '../components/portfolio';
export default function Home() {
  return (
    <>
      
      
      <div className={styles.root}>
        
        <Menu></Menu>
        <div className={styles.description} id='home'>
          <span className={styles.pedrorocha}>Pedro Rocha</span>
          <span className={styles.desenvolvedorwebfu}>Desenvolvedor de Software Full Stack</span>
          <div className={styles.flexcontainer}>
            <Link href={'https://www.linkedin.com/in/pedro-henrique-rocha-bb1435213/'}>
              <Image className={styles.logoslinkedinicon} src={logoslinkedinIcon} alt={'Oi'}></Image>
            </Link>
            <Link href={'https://github.com/pedrorochacr?tab=repositories'}>
              <Image className={styles.logosgithubicon} src={logosgithubIcon} alt={'Oi'} />
            </Link>
            
          </div>
        </div>
        <Sobre ></Sobre>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </div>
     
    </>
  )
}
