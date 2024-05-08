import { Tilt } from "react-tilt";
import { motion } from "framer-motion"


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
    >
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <motion.div
            options={{
              max: 45,
              scale: 1,
              speed:450
            }}

            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt="title" className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>            
          </motion.div>
        </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a full-stack web developer with a passion for harnessing cutting-edge technologies to build dynamic and user-friendly applications. Specializing in Laravel, React.js, Vue.js, and utilizing the power of Tailwind CSS, I strive to create seamless digital experiences that leave a lasting impression. Whether it's crafting robust backend systems or designing intuitive frontend interfaces, I'm dedicated to pushing the boundaries of web development to deliver innovative solutions that exceed expectations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'About')