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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={stylesNav.nav_btns}>
        <button>
          <a
            href="https://t.me/OlyaaPla"
            target="_blank"
            rel="noopener noreferrer"
            className={stylesNav.hire_me_button}
          >
            Hire Me
          </a>
        </button>
        <i onClick={menuHandler} className="ri-menu-5-fill"></i>
      </div>
    </div>
  );
}

export default Nav;
