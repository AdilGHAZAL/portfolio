import styles from './ProjectsStyles.module.css';
import bitchest from '../../assets/bitchest_logo.png';
import mosaique from '../../assets/logoMosaique.svg';
import Unipoints from '../../assets/Unipoints-logo.svg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bitchest}
          link="https://dorbani.alwaysdata.net"
          h3="BitChest"
          p="site de crypto"
        />
        <ProjectCard
          src={mosaique}
          link="https://mosaique-webdoc.vercel.app"
          h3="Mosaique"
          p="Webdoc d'Athletisme"
        />
        <ProjectCard
          src={Unipoints}
          link="https://github.com/Dridi19/Unipoints"
          h3="Unipoints"
          p="Application de fidélité"
        />
      </div>
    </section>
  );
}

export default Projects;
