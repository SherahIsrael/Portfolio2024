import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Tilt from 'react-parallax-tilt';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt options={{ "max-glare": 0.01, scale: 0.25 }}>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] bg-jetLight">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="glassmorphism rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-jetBlack text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Since starting my coding journey in 2020 I have built websites,
        worked on th UI/UX of a AI chat app and worked with an international
        group during my internship. 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
