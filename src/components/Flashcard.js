import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Flashcard() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [height, setHeight] = useState(250);
  const [width, setWidth] = useState(600);
  const [dots,setDots] = useState(false);
  const [arrows,setArrows] = useState(true);

  // Track window size to adjust the number of slides
  useEffect(() => {
    const handleResize = () => {
      if ( window.innerWidth > 430 && window.innerWidth < 827) {
        setSlidesToShow(1); 
        setHeight(270);  
        setWidth(200);
        setDots(false);
        setArrows(true);
      } 
      else if(window.innerWidth < 431){
        setSlidesToShow(1); 
        setHeight(270);  
        setWidth(200);
        setDots(true);
        setArrows(false);
      }
      else {
        setSlidesToShow(3);  
        setHeight(300);  
        setWidth(600);
        setDots(false);
        setArrows(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows:arrows,
  };

  return (
    <div 
    className={classNames(
      " m-auto",
      { [`w-[${width}px]`]: width }
    )}
    // className="w-[600px]   m-auto"
    >
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-forztek-blue h-[350px] text-white p-3"
              // className={classNames(
              //   "bg-forztek-blue text-white p-3",
              //   { [`h-[${height}px]`]: height }  // Dynamically set height using classNames
              // )}
            >
              <div
                className={classNames(
                  "bg-[#111024] justify-center items-center rounded-xl border",
                  { [`h-[${height}px]`]: height }
                )}
                //  className=" h-[300px] bg-[#111024] justify-center items-center rounded-xl border"
              >
                <div
                   className="h-35 w-[120px] mx-auto mt-7"
                >
                  <div className="h-32 "><img  src={d.img} alt="product_img" /></div>
                 
                </div>
                <div className="mt-9 text-[20px]">{d.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Lubrication solutions`,
    img: '/product1.png',
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: ` High speed  test bench`,
    img: '/product2.png',
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Product3`,
    img: '/product3.png',
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Product4`,
    img: '/product4.png',
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Product5`,
    img: '/product5.png',
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Flashcard;
