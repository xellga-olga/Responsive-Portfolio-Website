import stylesHeader from "./../Header/Header.module.css";
import HeroImg from "../../assets/heroImage.jpg";

const Header = () => {
   return (
      <div id="home" className={`${stylesHeader.header_wrapper} section`}>

         <div className={stylesHeader.header_container}>
            <h1>
               Hello I m , 👋 <br />
               Olya Plakhotnikova
            </h1>
            <p>Junior Front End Developer</p>
            <button>My Work</button>
         </div>

         <div className={stylesHeader.hero_img}>
            <img src={HeroImg} alt="Hero" id={stylesHeader.HeroImg} />
         </div>

      </div>
   );
};

export default Header;
