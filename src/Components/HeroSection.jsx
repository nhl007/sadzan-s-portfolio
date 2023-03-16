import React from 'react';
import {
  Profile2Head,
  bihance,
  dribble,
  facebook,
  instagram,
  linkedin,
  nameHead,
} from '../assets';

// import AnimatedCursor from 'react-animated-cursor';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const headAnimation = {
    initial: { y: -800, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -800, opacity: 0 },
  };
  return (
    // h-[96rem]
    <header className=' flex w-full h-[75.6rem] bg-bg_main z-[-5]'>
      <div className=' w-[50%] flex flex-col justify-start pt-[13rem] items-start pl-[11.8rem] relative overflow-hidden bg-bg_main_2 '>
        <div className='__hero_background w-full h-full absolute top-0 left-0 z-[2]'></div>
        <div className='__hero_background_secondary w-[65.6rem] h-[65.6rem] rounded-[50%] absolute bottom-0 left-0 ml-[-23.1rem] mb-[-36.9rem] z-[1]'></div>
        {/* <AnimatedCursor
          innerSize={28}
          outerSize={32}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        /> */}
        <div className=' z-50'>
          <div className=' w-[43.5rem] h-[22.3rem]'>
            <img src={nameHead} width={435} height={223} alt='SADZAN' />
          </div>
          <p className=' mt-[4.4rem] w-[50rem] text-[2.4rem] leading-[3rem] text-text_white'>
            I'm a Bengali designer based in Bangladesh. I'm available for
            full-time roles ( Remote), freelance projects and design advising.
          </p>
          <div className=' flex mt-[8rem] gap-[2.4rem] z-[2]'>
            <a href='#'>
              <img src={linkedin} alt='linkedin' />
            </a>
            <a href='#'>
              <img src={bihance} alt='linkedin' />
            </a>
            <a href='#'>
              <img src={facebook} alt='linkedin' />
            </a>
            <a href='#'>
              <img src={dribble} alt='linkedin' />
            </a>
            <a href='#'>
              <img src={instagram} alt='linkedin' />
            </a>
          </div>
        </div>
      </div>
      {/* //! Right side of hero section */}
      <div className=' w-[50%] flex justify-center items-center relative overflow-hidden'>
        <div className='__hero_background_secondary w-[17.6rem] h-[17.6rem] rounded-[50%] absolute top-0 right-0 mr-[-1.8rem] z-[10] mt-[-0.5rem]'></div>
        <div className=' w-[24.2rem] h-[17.6rem] top-[10rem] right-[9.1rem] absolute z-[5]'>
          <img src={Profile2Head} alt='profile2' />
        </div>

        {/* //? animated image and eclipse section */}
        <div className='w-[56.5rem] h-[51.6rem]'>
          <h1>UI UX</h1>
          <div className=' w-[56.5rem] h-[51.6rem]  relative pl-[4.5rem] rounded-[50%] __rounded_animated_profile'></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
