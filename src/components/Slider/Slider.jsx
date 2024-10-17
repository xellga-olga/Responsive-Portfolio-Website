import stylesSlider from "./../Slider/Slider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import image1 from "../../assets/logo-1.jpeg";
import image2 from "../../assets/logo-2.jpeg";
import image3 from "../../assets/logo-3.png";
import image4 from "../../assets/logo-4.jpg";

function Slider() {
  return (
    <div className={stylesSlider.slider_wrapper}>
      <Splide
        options={{
          perPage: 4,
          drag: "free",
          type: "loop",
          pagination: false,
          arrow: false,
          focus: "center",
          autoScroll: {
            speed: 1,
          },
          breakpoints: {
            1024: {
              perPage: 4,
            },
            768: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img
            className={stylesSlider.slide_img}
            src={image1}
            alt="slider-img"
            width={80}
            height={80}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={stylesSlider.slide_img}
            src={image2}
            alt="slider-img"
            width={80}
            height={80}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={stylesSlider.slide_img}
            src={image3}
            alt="slider-img"
            width={80}
            height={80}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className={stylesSlider.slide_img}
            src={image4}
            alt="slider-img"
            width={80}
            height={80}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
