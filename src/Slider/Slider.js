import { useState, useEffect } from "react";

import Slide from "./Slide.js";
import Dot from "./Dot.js";

function Slider() {
  const url = "http://localhost:3035/slides";
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [reFetch, setReFetch] = useState(false);
  let [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
        setIsFetching(false);
      } catch (e) {
        console.log(e);
        setIsFetching(false);
        setData([]);
      }
    };
    fetchProducts();
  }, [reFetch]);

  const sliderList = data.map((slide) => <Slide {...slide} key={slide.id} />);

  const dots = data.map((slide) => <Dot {...slide} key={slide.id} />);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1);
    } else setCurrentSlide(currentSlide--);
    goToSlide(currentSlide);
  };

  const nextSlide = () => {
    if (currentSlide !== data.length - 1) setCurrentSlide(currentSlide++);
    else setCurrentSlide(0);
    goToSlide(currentSlide);
  };

  const goToSlide = () => {
    document.querySelectorAll(".slide").forEach((s, index) => {
      s.style.transform = `translateX(${120 * (index - currentSlide)}%)`;
    });
  };

  return (
    <section className="section" id="section--1">
      <div className="slider">
        <div className="slider-row">{isFetching ? "Loading" : sliderList}</div>
        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="dots">{dots}</div>
      </div>
    </section>
  );
}
export default Slider;
