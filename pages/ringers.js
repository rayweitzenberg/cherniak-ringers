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

  let dunSlid = () => {
    generateNum().then((res) => {
      console.log("res", res);
      ringerTrigger ? setRingerNum(res) : setNextRingerNum(res);
    });

    setRingerTrigger(!ringerTrigger);
  };

  return (
    <>
      <div className="ringer-page">
        <Carousel
          interval={10000}
          onSlid={dunSlid}
          controls={false}
          indicators={false}
        >
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
