import { useRef } from "react";
import stylesNav from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef();
  const menuBar = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(stylesNav.showMenu);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      menuBar.current.classList.add(stylesNav.Stickymenu);
    } else {
      menuBar.current.classList.remove(stylesNav.Stickymenu);
    }
  });

  return (
    <div className={stylesNav.nav_wrapper} ref={menuBar}>
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
