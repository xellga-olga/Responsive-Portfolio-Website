import { useRef } from "react";
import stylesNav from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(stylesNav.showMenu);
  };

  return (
    <div className={stylesNav.nav_wrapper}>
      <div className={stylesNav.logo}>
        <span>OlyaPla.</span>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={stylesNav.nav_btns}>
        <button>Hire Me</button>
        <i onClick={menuHandler} className="ri-menu-5-fill"></i>
      </div>
    </div>
  );
}

export default Nav;
