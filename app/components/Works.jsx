import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import VanillaTilt from "vanilla-tilt";

const ProjectCard = ({ index, name, description, tags, 
               image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full">
        <div className="relative w-full h-[230px]"> 

        </div>
      </div>
    </motion.div>
  );
}

const Works = () => {
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
          technologies, and manage projects effectively. I'm proud to share
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
          {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
