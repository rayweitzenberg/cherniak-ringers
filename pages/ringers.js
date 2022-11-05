import Image from "next/image";
import { useEffect, useState } from "react";

import generateNum from "../components/generateNum";

// Ringers on art blocks:
// https://www.artblocks.io/collections/curated/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13

// https://nextjs.org/docs/api-reference/next/image#advanced-props

export default function Ringers() {
  const [ringerNum, setRingerNum] = useState("000000");

  useEffect(() => {
    setInterval(() => {
      generateNum().then((res) => {
        console.log("res", res);
        setRingerNum(res);
      });
    }, 4000);
  }, []);

  return (
    <>
      <div className="ringer-page">
        <div className="ringer-container">
          <Image
            className="ringer-image"
            src={"/ring/" + ringerNum + ".png"}
            priority
            fill="false"
            sizes="100vw"
            alt={"/ring/" + ringerNum + ".png"}
          />
          <h3 className="ringer-title">Ringers #{ringerNum}</h3>
        </div>
      </div>
    </>
  );
}
