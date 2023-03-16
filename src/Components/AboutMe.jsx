import React from 'react';
import PageLayout from '../Layout/PageLayout';

const AboutMe = () => {
  const projectDetails = [
    {
      header: 'GGT Electronics',
      des: "I'm a Bengali  designer based in Bangladesh. I'm available for full-time roles ( Remote), freelance projects and design advising.",
      link: 'commerce',
    },
  ];

  return <PageLayout info={projectDetails} />;
};

export default AboutMe;
