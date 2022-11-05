import Image from "next/image";
import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import generateNum from "../components/generateNum";
import RingerImage from "../components/ringerImage";

// Ringers on art blocks:
// https://www.artblocks.io/collections/curated/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13

// https://nextjs.org/docs/api-reference/next/image#advanced-props
// https://react-bootstrap.github.io/components/carousel/

export default function Ringers() {
  const [ringerNum, setRingerNum] = useState("000000");
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      generateNum().then((res) => {
        // console.log("res", res);
        setRingerNum(res);
      });

      let activeSlide = document.querySelector(".carousel-item.active");
      activeSlide.style.border = "5px solid red";
    }, 4000);
  }, []);

  let doneSlid = () => {
    console.log("eeee");
  };

  return (
    <>
      <div className="ringer-page">
        <Carousel onSlid={doneSlid}>
          <Carousel.Item>
            <RingerImage ringerNum={ringerNum} />
          </Carousel.Item>
          <Carousel.Item>
            <RingerImage ringerNum={ringerNum} />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
