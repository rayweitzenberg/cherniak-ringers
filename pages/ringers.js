import Image from "next/image";
import { useEffect, useState } from "react";

// Ringers on art blocks:
// https://www.artblocks.io/collections/curated/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/13

// https://nextjs.org/docs/api-reference/next/image#advanced-props

export default function Ringers() {
  const [ringer, setRinger] = useState("/ring/000000.png");
  const [imgTitle, setImgTitle] = useState("000000");

  const fileNamer = () => {
    let ranNum = Math.floor(Math.random() * 999);

    if (ranNum < 10) {
      ranNum = "00000" + ranNum;
    } else if (ranNum < 100) {
      ranNum = "0000" + ranNum;
    } else {
      ranNum = "000" + ranNum;
    }

    console.log("ranNum", ranNum);
    setRinger("/ring/" + ranNum + ".png");
    setImgTitle(ranNum);
  };

  useEffect(() => {
    setInterval(() => {
      fileNamer();
    }, 4000);
  }, []);

  return (
    <>
      <div className="ringer-page">
        <div className="ringer-container">
          <Image
            className="ringer-image"
            src={ringer}
            priority
            fill="false"
            sizes="100vw"
            alt={ringer}
          />
          <h3 className="ringer-title">Ringers #{imgTitle}</h3>
        </div>
      </div>
    </>
  );
}
