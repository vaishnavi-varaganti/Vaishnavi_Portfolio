import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        <p className="mb-6">
          Hey there! I’m Vaishnavi — someone who finds joy in building things that make life a little easier and systems a little smarter. I didn’t just stumble into software development — I leaned into it, learned from it, and kept growing through every bug, breakthrough, and brainstorm session.
        </p>

        <p className="mb-6">
          With over five years of experience building scalable backend services in Java and Spring Boot, designing clean, responsive UIs in React and Vue, and connecting the dots with tools like Kafka, GraphQL, and AWS — I’ve come to appreciate that code isn’t just about syntax. It’s about solving real problems and doing it in a way that’s thoughtful, reliable, and a little better each time.
        </p>

        <p className="mb-6">
          I’ve had the chance to contribute to enterprise platforms, academic tools, and cloud-based systems that support everything from faculty management to fraud detection. Whether it's architecting microservices, tuning SQL queries for performance, or simplifying user journeys through frontend logic — I love figuring out how systems talk to each other and how people interact with them.
        </p>

        <p className="mb-6">
          What drives me isn’t just delivering features — it’s the learning that happens when things don’t go as planned. It’s the quiet pride in writing clean code, the satisfaction in debugging a tough issue, and the constant curiosity to pick up something new.
        </p>

        <p>
          Outside of the technical side, I believe in collaboration, clarity, and continuous improvement — in code, mindset, and life. Every challenge is a chance to learn, every project an opportunity to grow. And for me, that’s the most exciting part of this journey.
        </p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");