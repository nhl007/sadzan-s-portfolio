import React, { useState } from 'react';
import { AboutMe, Experience, Projects } from '../Components';
import { motion } from 'framer-motion';

const SharedLayout = () => {
  const [active, setActive] = useState('project');
  return (
    <div className=' flex w-full flex h-[76.5rem]  bg-bg_white'>
      {/*//! left side */}
      <div className=' w-[40%] h-full flex justify-center items-center flex-col gap-6'>
        <LeftMenu
          active={active}
          setActive={setActive}
          menuName={'project'}
          pageName={'project'}
        />
        <LeftMenu
          active={active}
          setActive={setActive}
          menuName={'about'}
          pageName={'about'}
        />
        <LeftMenu
          active={active}
          setActive={setActive}
          menuName={'exp'}
          pageName={'exp'}
        />
      </div>
      {/*//! right side */}
      <div className=' flex self-end w-[81.4rem] h-[65rem]  __shared__layout__border'>
        {active === 'project' ? (
          <Projects />
        ) : active === 'exp' ? (
          <Experience />
        ) : (
          <AboutMe />
        )}
      </div>
    </div>
  );
};

export default SharedLayout;

const LeftMenu = ({ active, setActive, menuName, pageName }) => {
  return (
    <div
      onClick={() => {
        setActive(pageName);
      }}
      className=' flex justify-center items-center gap-4 '
    >
      <div className=' w-[20px]'>
        {active === pageName && (
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [-100, 0, -100], y: [0], opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 2 }}
          >
            <span
              className={`text-[6.4rem] ${
                active === pageName ? 'text-text_pink' : 'text-text_ash'
              }
          } leading-[7.9rem] hover:cursor-pointer`}
            >
              -{/* {active === pageName ? '-' : ''} */}
            </span>
          </motion.div>
        )}
      </div>
      <div
        className={`w-[300px] text-[6.4rem] ${
          active === pageName ? 'text-text_pink' : 'text-text_ash'
        } leading-[7.9rem] hover:cursor-pointer`}
      >
        {menuName}
      </div>
    </div>
  );
};

// <div
// onClick={() => {
//   setActive('project');
// }}
// className={`text-[6.4rem] w-[40rem] ${
//   active === 'project' ? 'text-text_pink' : 'text-text_ash'
// } leading-[7.9rem] hover:cursor-pointer`}
// >
// {active === 'project' ? '-' : ''}Project
// </div>
// <div
// onClick={() => {
//   setActive('exp');
// }}
// className={`text-[6.4rem] ${
//   active === 'exp' ? 'text-text_pink' : 'text-text_ash'
// } leading-[7.9rem] hover:cursor-pointer`}
// >
// {active === 'exp' ? '-' : ''}Experience
// </div>
// <div
// onClick={() => {
//   setActive('about');
// }}
// className={`text-[6.4rem] ${
//   active === 'about' ? 'text-text_pink' : 'text-text_ash'
// } leading-[7.9rem] hover:cursor-pointer`}
// >
// {active === 'about' ? '-' : ''}About Me
// </div>
