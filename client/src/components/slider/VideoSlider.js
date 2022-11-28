import React from "react";
import "./VideoSlider.css";
import { Carousel } from "react-bootstrap";
import v1 from "./videos/v1.mp4";
import vid2 from "./videos/vid2.mp4";
import vid3 from "./videos/vid3.mp4";
import vid4 from "./videos/vid4.mp4";
import ReactPlayer from "react-player";
const VideoSlider = ({}) => {
  const videoProp = [
    {
      id: 1,
      title: "video1",
      src: v1,
    },
    {
      id: 2,
      title: "video2",
      src: vid2,
    },
    {
      id: 3,
      title: "video3",
      src: vid3,
    },
    {
      id: 4,
      title: "video4",
      src: vid4,
    },
  ];
  return (
    <Carousel>
      {videoProp.map((videoObj) => {
        return (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
              className="video"
              url={videoObj.src}
              pip={true}
              playing={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
            <Carousel.Caption className="content">
              <h2>New Collection Available Now</h2>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default VideoSlider;
