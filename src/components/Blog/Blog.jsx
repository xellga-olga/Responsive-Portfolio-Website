import stylesBlog from "./../Blog/Blog.module.css";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${stylesBlog.animate_section}`);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(stylesBlog.visible);
          }
        });
      },
      { threshold: 0.2 } 
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div id="blog" className={`${stylesBlog.blog_wrapper} section`}>
      <div className={stylesBlog.blog_container}>
        <h1 className={`${stylesBlog.blog_title}`}>
          My Journey from Law <br /> to Frontend <span>Development</span>
        </h1>
        <p className={`${stylesBlog.blog_text} ${stylesBlog.animate_section}`}>
          Hi, I'm Olga, a 27-year-old frontend developer. My career started in law,
          where I spent several years. However, over time, I realized that I wasn’t fulfilled
          and wanted a more creative and challenging path.
        </p>
        <p className={`${stylesBlog.blog_text} ${stylesBlog.animate_section}`}>
          I became interested in IT and soon discovered programming was the perfect
          balance of creativity and problem-solving.
        </p>
        <h2 className={`${stylesBlog.blog_subtitle} ${stylesBlog.animate_section}`}>
          Why I Chose React
        </h2>
        <p className={`${stylesBlog.blog_text} ${stylesBlog.animate_section}`}>
          As I explored JavaScript, I quickly gravitated toward React. I loved its
          component-based approach, which made building interactive and dynamic
          applications both fun and intuitive.
        </p>
        <h2 className={`${stylesBlog.blog_subtitle} ${stylesBlog.animate_section}`}>
          Breaking into IT
        </h2>
        <p className={`${stylesBlog.blog_text} ${stylesBlog.animate_section}`}>
          After months of self-study in HTML, CSS, and JavaScript, I built my first portfolio
          and started job hunting.
        </p>
        <h2 className={`${stylesBlog.blog_subtitle} ${stylesBlog.animate_section}`}>
          Future Goals
        </h2>
        <p className={`${stylesBlog.blog_text} ${stylesBlog.animate_section}`}>
          I'm currently expanding my skills in React, Redux, and TypeScript. Next, I plan to
          dive into fullstack development to build complete applications.
        </p>
      </div>
    </div>
  );
}

export default Blog;