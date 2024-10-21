import stylesFooter from "./../Footer/Footer.module.css";

function Footer() {
  return (
    <div className={stylesFooter.footer_wrapper}>
      <h2>OlyaPla.</h2>
      <div className={stylesFooter.social}>
        <a href="https://github.com/xellga-olga" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-line"></i>
        </a>
        <a href="https://m.me/O1ina" target="_blank" rel="noopener noreferrer">
          <i className="ri-messenger-line"></i>
        </a>
        <a href="https://www.instagram.com/olya__pla/" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-line"></i>
        </a>
      </div>
      <p>© 2024 by 🤍 OlyaPla. All Right Reserved</p>
    </div>
  );
}

export default Footer;