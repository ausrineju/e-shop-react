import { useState, useEffect } from "react";

import Slide from "./Slide.js";
import Dot from "./Dot.js";

function Slider() {
  const url = "http://localhost:3035/slides";
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [reFetch, setReFetch] = useState(false);

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

  const sliderList = data.map((slide) => (
    <Slide {...slide} key={slide.id} src={slide.src} />
  ));

  const dots = data.map((slide) => <Dot {...slide} key={slide.id} />);

  return (
    <section className="section" id="section--1">
      <div className="slider">
        <div className="slider-row">{isFetching ? "Loading" : sliderList}</div>
        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots">{dots}</div>
      </div>
    </section>
  );
}
export default Slider;
