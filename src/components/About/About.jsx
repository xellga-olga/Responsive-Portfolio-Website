import stylesAbout from "./../About/About.module.css";
import AboutImg from "../../assets/about.jpg";

function About() {
   return (
      <div id="about" className={`${stylesAbout.about_wrapper} section`}>
         <div className={stylesAbout.about_image}>
            <img src={AboutImg} alt="About Me" />
         </div>

         <div className={stylesAbout.about_container}>
            <small>About me</small>
            <h2>
               " Bringing style and creativity <br /> to the <span>digital</span> world "
            </h2>
            <p>
               A creative, fashion-forward Front-End Developer who loves turning ideas into beautiful, user-friendly websites. Always up for learning something new and adding a fresh, stylish touch to every project.
            </p>
            <button>
               <i className="ri-arrow-down-line"></i>Download CV
            </button>
         </div>
      </div>
   );
}

export default About;