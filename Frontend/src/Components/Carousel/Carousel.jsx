import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.jpg'

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return (
            <div className='slide'>
                  <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        pagination={{
                              clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper px-5 mt-16"
                  >
                        <SwiperSlide>
                              <img src={slide1} alt="" />
                              <div className='absolute text-left'>
                                    <p className='text-2xl text-[#545a60]'>SALE UPTO <span className='text-amber-600'>20% OFF</span></p>
                                    <h1 className='text-[#001f57] text-6xl mt-7'>Meet your next <br /> favorite book</h1>
                                    <p className='mt-7'>Unleash your imagination with epic fantasy sagas, mystical adventures, <br /> and tales of otherworldly realms. Embark on quests with heroes.</p>
                                    <div className='flex items-center gap-10 mt-7'>
                                          <button className=' btn1 cursor-pointer'>SHOP NOW</button>
                                          <button className='btn1 text-[#4285f5] border border-[#4285f5] px-8 py-3 rounded-lg cursor-pointer'>TAKE A TOUR</button>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide2} alt="" />
                              <div className='absolute text-left'>
                                    <p className='text-2xl text-white'>SALE UPTO <span className='text-amber-600'>20% OFF</span></p>
                                    <h1 className='text-amber-600 text-6xl mt-7'>Meet your next <br /> favorite book</h1>
                                    <p className='mt-7 text-white'>Unleash your imagination with epic fantasy sagas, mystical adventures, <br /> and tales of otherworldly realms. Embark on quests with heroes.</p>
                                    <div className='flex items-center gap-10 mt-7'>
                                          <button className='btn1 text-white px-8 py-3 rounded-lg cursor-pointer'>SHOP NOW</button>
                                          <button className='btn1 text-[#4285f5] border border-[#4285f5] px-8 py-3 rounded-lg cursor-pointer'>TAKE A TOUR</button>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slide3} alt="" />
                              <div className='absolute text-left'>
                                    <p className='text-2xl text-[#545a60]'>SALE UPTO <span className='text-amber-600'>20% OFF</span></p>
                                    <h1 className='text-[#001f57] text-6xl mt-7'>Meet your next <br /> favorite book</h1>
                                    <p className='mt-7'>Unleash your imagination with epic fantasy sagas, mystical adventures, <br /> and tales of otherworldly realms. Embark on quests with heroes.</p>
                                    <div className='flex items-center gap-10 mt-7'>
                                          <button className='btn1 text-white px-8 py-3 rounded-lg cursor-pointer'>SHOP NOW</button>
                                          <button className='btn1 text-[#4285f5] border border-[#4285f5] px-8 py-3 rounded-lg cursor-pointer'>TAKE A TOUR</button>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                              <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                              </svg>
                              <span ref={progressContent}></span>
                        </div>
                  </Swiper>
            </div>
      );
};

export default Carousel;