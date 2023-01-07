import styles from '../styles/Sobre.module.css'
import frame from "../assets/Frame.png";
import importantDevices from "../assets/devices.png";
import developerMode from "../assets/Developermode.png";
import star from "../assets/star.png";
import Image from 'next/image';
import Feedbacks from './feedbacks';
export default function Sobre() {
    return (
        <>
            <div className={styles.description} id='servico'>
                <div className={styles.frame1}>
                    <span className={styles.desdede2020narea}>
                        Desde de 2020 na área de desenvolvimento de Software.<br /> Sempre oferecendo
                        o melhor serviço aos meus clientes.
                    </span>
                    <hr className={styles.line} />
                    <div className={styles.flexcontainer}>
                        <Image className={styles.importantDevices} src={importantDevices} alt={''} width={159} ></Image>
                        <span className={styles.desenvolvimentodes}>
                            Desenvolvimento de Sites e Sistemas
                        </span>
                    </div>
                    <hr className={styles.line} style={{ marginTop: 4 }} />
                    <div className={styles.flexcontainer1}>
                        <Image className={styles.frame} width={190} src={frame} alt={''} />
                        <span className={styles.desenvolvimentodep}>
                            Desenvolvimento de Planilhas em Excel
                        </span>
                    </div>
                    <hr className={styles.line} style={{ marginTop: 4 }} />
                    <div className={styles.flexcontainer2}>
                        <Image className={styles.developermod} src={developerMode} width={160} alt={''} />
                        <span className={styles.automaodeprocesos} style={{ marginTop: 15 }}>Automação de Procesos</span>
                    </div>
                </div>
        
                <span className={styles.feedbacksTitle}>
                    <Image  src={star} width={60} alt={''} />
                    <p >feedbacks de clientes</p>
                    <Image  src={star} width={60} alt={''} />
                </span>
                <Feedbacks></Feedbacks>
            </div>
        </>
    )
}