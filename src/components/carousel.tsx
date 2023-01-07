
import mypic from '../assets/oi.png'
import Image from 'next/image'
import projetoArq from '../assets/projetoArquitetura.png'
import ecomercePic from '../assets/ecommerce.png'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Carousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
export default function Carousel() {
    return (
        <>
            <div className={styles.root}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <Link href={'https://github.com/pedrorochacr/Crud'} >
                            <Image className={styles.img} src={mypic} alt="Minha Foto"  ></Image>
                        </Link>            
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Link href={''} >
                            <Image className={styles.img} src={projetoArq} alt="Minha Foto"  ></Image>
                        </Link>            
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Link href={''} >
                            <Image className={styles.img} src={ecomercePic} alt="Minha Foto"  ></Image>
                        </Link>            
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Link href={''} >
                            <Image className={styles.img} src={mypic} alt="Minha Foto"  ></Image>
                        </Link>            
                    </SwiperSlide>
                    
                </Swiper>
            </div>

        </>
    );
}


