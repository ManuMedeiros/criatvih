import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import "./slick.css";
import "./slick-theme.css";
import MovieCard from "../card";

export const Carousel = ({ initialSlide = 0, data }) => {

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider ref={slider} {...settings} >
      {data?.map((movie) => <MovieCard movie={movie}/>)}
    </Slider>
  )
}