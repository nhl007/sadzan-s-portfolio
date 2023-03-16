import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ info }) => {
  return (
    <div className=' scroll__parent bg-bg_green w-full h-full __shared__layout__border relative overflow-y-scroll scrollbar-hide'>
      {info.map((obj) => {
        return <Page info={obj} />;
      })}
    </div>
  );
};

export default PageLayout;

const Page = ({ info }) => {
  return (
    <section className=' w-full h-full'>
      <div className='flex flex-col justify-center items-start pl-[4.8rem] pt-[17.9rem]'>
        <h1 className=' text-[4.8rem] leading-[5.9rem]'>{info.header}</h1>
        <p className=' text-[1.6rem] leading-[2rem] w-[33.5rem] mt-[1.6rem] mb-[2.4rem] z-20'>
          {info.des}
        </p>
        <a
          href={info.link}
          className=' text-[1.6rem] leading-[2rem] mb-[9.3rem] font-semibold'
        >
          Open Case Study
        </a>
        <img
          className='w-[20.5rem] h-[12rem] object-cover'
          alt='e'
          src={info.pic4}
        />
      </div>
      <div className='w-[29.2rem] h-[168.3rem] absolute top-[3.2rem] right-[4.8rem] bg-bg_green __page__lay__rect'>
        <img src={info?.pic1} className='' />
        {/* <div className='w-[29.2rem] h-[16.3rem] absolute top-0 __page__lay__rect' /> */}
      </div>
      <div className='w-[34.7rem] h-[19.5rem] absolute top-[22.7rem] right-[10.1rem] bg-bg_green __page__lay__rect'>
        <img src={info?.pic3} />
        {/* <div className='w-[29.2rem] h-[16.3rem] absolute top-0 __page__lay__rect' /> */}
      </div>
      <div
        transition={{ ease: 'easeOut', duration: 1 }}
        className='w-[29.2rem] h-[16.3rem] absolute bottom-[3.2rem] right-[20.9rem] __page__lay__rect'
      >
        <img src={info?.pic4} className='' />
        {/* <div className='w-[29.2rem] h-[16.3rem] absolute top-0 __page__lay__rect' /> */}
      </div>
    </section>
  );
};
