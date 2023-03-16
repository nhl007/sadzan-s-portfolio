import React from 'react';
import PageLayout from '../Layout/PageLayout';
import { ecommerce1, ecommerce2, ecommerce3, ecommerce4 } from '../assets';

const Projects = () => {
  const projectDetails = [
    {
      header: 'E-Commerce',
      des: "I'm a Bengali  designer based in Bangladesh. I'm available for full-time roles ( Remote), freelance projects and design advising.",
      link: 'commerce',
      pic1: ecommerce1,
      pic2: ecommerce2,
      pic3: ecommerce3,
      pic4: ecommerce4,
    },
    {
      header: 'News',
      des: "I'm a Bengali  designer based in Bangladesh. I'm available for full-time roles ( Remote), freelance projects and design advising.",
      link: 'commerce',
      pic1: ecommerce1,
      pic2: ecommerce2,
      pic3: ecommerce3,
      pic4: ecommerce4,
    },
  ];

  return <PageLayout info={projectDetails} />;
};

export default Projects;
