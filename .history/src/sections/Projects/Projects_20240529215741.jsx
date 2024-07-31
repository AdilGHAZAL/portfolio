import styles from './ProjectsStyles.module.css';
import bitchest from '../../assets/bitchest_logo.png';
import mosaique from '../../assets/logoMosaique.svg';
import hipsster from '../../assets/hipsster.png';
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
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
