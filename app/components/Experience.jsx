import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience
      </h2>
    </motion.div>
    </>
  )
}

export default SectionWrapper(Experience,'work');
