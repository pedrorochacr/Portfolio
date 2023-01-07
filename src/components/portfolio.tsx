

import React, { useRef, useState } from "react";

import styles from "../styles/Portfolio.module.css";
import ecommerce from "../assets/projetoEcommerce.png";
import crud from "../assets/projetoCrud.png";
import arquitetura from "../assets/projetoArquitetura.png";


import Image from "next/image";
export default function Portfolio() {
    return (
        <>
            <h1 className={styles.title}>Projetos</h1>
            <div className={styles.portfolioArea}  id='portfolio'>
                <section style={{ marginTop: 25 }}>
                    <Image className={styles.ecommercePic} src={ecommerce} width={450} alt={""}></Image>
                    <p className={styles.projectDescription}>Site - Ecommerce </p>
                </section>
                <section>
                    <Image src={crud} width={380} alt={""}></Image>
                    <p className={styles.projectDescription}>Sistema - Cadastro de Usuários</p>
                </section>
                <section>
                    <Image className={styles.arqPic} src={arquitetura} width={450} alt={""}></Image>
                    <p className={styles.projectDescription}>Site - Projeto de Arquitetura </p>
                </section>
            </div>

        </>
    );
}


