import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Sports from "./images/sports.jpg";
import Projects from "./images/projects.jpg";
import Cultural from "./images/cultural fest.jpg";
const CarouselImage = () => {
  return (
    <div  className="carousal">
      <Carousel >
        <Carousel.Item interval={2000}>
          <img src={Sports} alt="logo.png" style={{ width: '50px', height: '410px',padding:'10px 70px 70px 70px' }}  className="d-block w-100 carousal-image"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img src={Projects} alt="logo.png" style={{ width: '50px', height: '410px',padding:'10px 70px 70px 70px'}}  className="d-block w-100 carousal-image" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={Cultural} alt="logo.png" style={{ width: '50px', height: '410px',padding:'10px 70px 70px 70px' }}  className="d-block w-100 carousal-image"/>
      </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default CarouselImage;
