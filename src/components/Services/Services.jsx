import stylesServices from "./../Services/Services.module.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

function Services() {
  return (
    <div id="service" className={`${stylesServices.service_wrapper} section`}>
      <small>My Services</small>
      <h2>My Expert Areas</h2>
      <p>
        As a Junior React.js Front-End Developer, I focus on creating
        user-friendly, responsive, and visually appealing websites.
        <br /> My goal is to turn ideas into reality with clean, efficient code
        and modern design principles.
      </p>

      <div className={stylesServices.service_cards}>
        <div className={stylesServices.service_card}>
          <img src={image1} alt="Web Development" />
          <h3>Web Development</h3>
          <p>
            I build responsive and dynamic websites using HTML, CSS, JavaScript,
            and React.js. My focus is on clean, maintainable code and creating
            seamless user experiences.
          </p>
        </div>
        <div className={stylesServices.service_card}>
          <img src={image2} alt="React Development" />
          <h3>React Development</h3>
          <p>
            I specialize in React.js to build interactive and scalable user
            interfaces, ensuring smooth performance and a great user experience
            for web applications.
          </p>
        </div>
        <div className={stylesServices.service_card}>
          <img src={image3} alt="Responsive Design" />
          <h3>Responsive Design</h3>
          <p>
            I ensure that websites are fully responsive and look great on all
            devices, from desktops to smartphones, by using modern CSS
            techniques and frameworks like Bootstrap or Tailwind.
          </p>
        </div>
        <div className={stylesServices.service_card}>
          <img src={image4} alt="Performance Optimization" />
          <h3>Performance Optimization</h3>
          <p>
            I focus on optimizing website performance, ensuring fast loading
            times and smooth functionality. By using best practices like code
            splitting, lazy loading, and minimizing bundle sizes, I help create
            websites that run efficiently.
          </p>
        </div>
        <div className={stylesServices.service_card}>
          <img src={image5} alt="API Integration" />
          <h3>API Integration</h3>
          <p>
            I have experience working with RESTful APIs, allowing me to
            integrate external data sources and services into web applications.
            Whether it is fetching data or enabling third-party services, I
            ensure smooth API communication.
          </p>
        </div>
        <div className={stylesServices.service_card}>
          <img src={image6} alt="Version Control" />
          <h3>Version Control</h3>
          <p>
            I use Git and GitHub for version control, ensuring that my code is
            well-organized and easy to collaborate on in team environments. This
            allows for seamless project tracking and code management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
