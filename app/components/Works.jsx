'use client'
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import {motion} from 'framer-motion'
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {styles} from '../styles'
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

const ProjectCard = ({ index, options, name, description, tags, image, source_code_link }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} ref={tilt}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full">
        <div className="relative w-full h-[230px]"> 
        <Image src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={()=>window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Image src={github} alt={"github"} className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
        </div>
        <div className="mt-5">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const Works = () => {
  const options = {
    max:45,
    scale:1,
    speed:450
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"}
        >
          My portfolio features several real-world examples of my programming
          skills and experience. Each project is described briefly and includes
          links to both the code repository and deployments. These projects
          showcase my ability to solve complex problems, work with various
          technologies, and manage projects effectively. I&apos;m proud to share
          these examples of my work, which demonstrate my proficiency in
          different programming languages and my creativity in addressing
          challenges. Please take a look and let me know if you have any
          questions or feedback.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          options={options}
          {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
