import stylesProjects from "./../Projects/Projects.module.css";

import P1 from "./../../assets/p-1.png";
import P2 from "./../../assets/p-2.png";
import P3 from "./../../assets/p-3.png";
import P4 from "./../../assets/p-4.png";

const Projects = () => {
  return (
    <div className={`${stylesProjects.projects_wrapper} section`}>
      <small>My Portfolio</small>
      <h1>
        Review My Latest <span>Projects</span>
      </h1>

      <div className={stylesProjects.project_cards}>
        <div className={stylesProjects.card}>
          <a
            href="https://weather-six-orcin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={P1} alt="projects-image" />
          </a>
          <div className={stylesProjects.content}>
            <h3>Weather</h3>
            <p>Using OpenWeatherMap API</p>
          </div>
        </div>

        <div className={stylesProjects.card}>
          <a
            href="https://e-commerce-inly.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={P2} alt="projects-image" />
          </a>
          <div className={stylesProjects.content}>
            <h3>E-commerce</h3>
            <p>Using React, Redux Toolkit, and Tailwind CSS</p>
          </div>
        </div>

        <div className={stylesProjects.card}>
          <a
            href="https://e-shop-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={P3} alt="projects-image" />
          </a>
          <div className={stylesProjects.content}>
            <h3>E-Shop</h3>
            <p>Using React JS and Tailwind CSS</p>
          </div>
        </div>

        <div className={stylesProjects.card}>
          <a
            href="https://news-react-blush.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={P4} alt="projects-image" />
          </a>
          <div className={stylesProjects.content}>
            <h3>News</h3>
            <p>Using React, Redux Toolkit, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
