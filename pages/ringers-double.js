import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import generateNum from "../components/generateNum";
import RingerImage from "../components/ringerImage";

// Ringers on art blocks courtesy of @dmitricherniak
// https://www.artblocks.io/collections/curated/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13

// https://nextjs.org/docs/api-reference/next/image#advanced-props
// https://react-bootstrap.github.io/components/carousel/

export default function Ringers() {
  const [ringerTrigger, setRingerTrigger] = useState(true);
  const [ringerNum, setRingerNum] = useState("000303");
  const [nextRingerNum, setNextRingerNum] = useState("000808");
  const [workNum, setWorkNum] = useState("303");
  const [nextWorkNum, setNextWorkNum] = useState("808");

  const [botRingerNum, botSetRingerNum] = useState("000303");
  const [botNextRingerNum, botSetNextRingerNum] = useState("000808");
  const [botWorkNum, botSetWorkNum] = useState("303");
  const [botNextWorkNum, botSetNextWorkNum] = useState("808");

  const [slideIndex, setSlideIndex] = useState(0);

  // get random number of file + artwork and set that
  // for the upcoming slide to be shown
  //
  // swap assignment/config of the next slide each time
  // the most recently displayed slide is fully shown
  //
  let ringSlid = () => {
    generateNum().then((res) => {
      console.log("res", res[0]);
      ringerTrigger ? setRingerNum(res[0]) : setNextRingerNum(res[0]);
      ringerTrigger ? setWorkNum(res[1]) : setNextWorkNum(res[1]);
    });

    generateNum().then((res) => {
      console.log("res", res[0]);
      ringerTrigger ? botSetRingerNum(res[0]) : botSetNextRingerNum(res[0]);
      ringerTrigger ? botSetWorkNum(res[1]) : botSetNextWorkNum(res[1]);
    });

    setRingerTrigger(!ringerTrigger);
  };

  // advances 2nd carousel which is triggered at start of 1st carousel's
  // transition using the 'onSlide' function
  //
  // setting timeout to delay/stagger the 2nd carousel's transition
  //
  let advanceSlide = () => {
    setTimeout(() => {
      if (slideIndex === 0) {
        setSlideIndex(1);
      } else {
        setSlideIndex(0);
      }
    }, 130);
  };

  //   let botSlid = () => {
  //     generateNum().then((res) => {
  //       console.log("res", res[0]);
  //       ringerTrigger ? botSetRingerNum(res[0]) : botSetNextRingerNum(res[0]);
  //       ringerTrigger ? botSetWorkNum(res[1]) : botSetNextWorkNum(res[1]);
  //     });

  //     setRingerTrigger(!ringerTrigger);
  //   };

  return (
    <>
      <div className="ringer-page">
        <Carousel
          interval={10000}
          onSlid={ringSlid}
          onSlide={advanceSlide}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <RingerImage ringerNum={ringerNum} imgTitle={workNum} />
          </Carousel.Item>

          <Carousel.Item>
            <RingerImage ringerNum={nextRingerNum} imgTitle={nextWorkNum} />
          </Carousel.Item>
        </Carousel>

        {/* Carousel Direction: */}
        {/* https://stackoverflow.com/a/62934734/4811066 */}
        <Carousel
          // interval={10000}
          activeIndex={slideIndex}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <RingerImage ringerNum={botRingerNum} imgTitle={botWorkNum} />
          </Carousel.Item>

          <Carousel.Item>
            <RingerImage
              ringerNum={botNextRingerNum}
              imgTitle={botNextWorkNum}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
