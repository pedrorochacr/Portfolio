

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Feedbacks.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard, Mousewheel } from "swiper";

export default function Feedbacks() {
    return (
        <>
            <div className={styles.swiperArea}>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <h1>Samuel</h1>
                            <p>"Excelente profissional, me salvou em um projeto, indico e muito!"</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <h1>Bruno</h1>
                            <p>"Ótimo profissional, competente, simpático e prestativo. Bom trabalho."</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.card}>
                            <h1>Denisson </h1>
                            <p>"Profissional extremamente capacitado com resolução rápida da solicitação."</p>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>

        </>
    );
}


