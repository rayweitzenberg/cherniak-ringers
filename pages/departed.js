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
  const [nextRingerNum, setNextRingerNum] = useState("000101");
  const [workNum, setWorkNum] = useState('303');
  const [nextWorkNum, setNextWorkNum] = useState('101');

  let dunSlid = () => {
    generateNum().then((res) => {
      console.log("res", res[0]);
      ringerTrigger ? setRingerNum(res[0]) : setNextRingerNum(res[0]);
      ringerTrigger ? setWorkNum(res[1]) : setNextWorkNum(res[1]);
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
            <RingerImage collection='departed' ringerNum={ringerNum} imgTitle={workNum} />
          </Carousel.Item>

          <Carousel.Item>
            <RingerImage collection='departed' ringerNum={nextRingerNum} imgTitle={nextWorkNum} />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
