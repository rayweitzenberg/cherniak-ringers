import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import generateNum from "../components/generateNum";
import RingerImage from "../components/ringerImage";

// Ringers on art blocks:
// https://www.artblocks.io/collections/curated/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13

// https://nextjs.org/docs/api-reference/next/image#advanced-props
// https://react-bootstrap.github.io/components/carousel/

export default function Ringers() {
  const [ringerNum, setRingerNum] = useState("000303");
  const [nextRingerNum, setNextRingerNum] = useState("000808");
  const [activeRinger, setActiveRinger] = useState(true);

  useEffect(() => {
    generateNum()
      .then((res) => {
        console.log("res", res);
        setRingerNum(res);
      })
  }, [activeRinger]);

  let doneSlid = () => {
    setNextRingerNum(ringerNum);

    setTimeout(() => {
      setActiveRinger(!activeRinger);
      console.log("activeRinger", activeRinger);
    }, 4800);

    // let nextSlide = document.querySelectorAll(".carousel-item:not(.active)");
  };

  return (
    <>
      <div className="ringer-page">
        <Carousel onSlid={doneSlid} controls={true}>
          {/* <Carousel.Item>
            {activeRinger ? (
              <RingerImage ringerNum={ringerNum} />
            ) : (
              <RingerImage ringerNum={nextRingerNum} />
            )}
          </Carousel.Item> */}

          <Carousel.Item>
            <RingerImage ringerNum={ringerNum} />
          </Carousel.Item>

          <Carousel.Item>
            <RingerImage ringerNum={nextRingerNum} />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
