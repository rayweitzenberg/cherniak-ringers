import Image from "next/image";
import { useEffect, useState } from "react";

// https://nextjs.org/docs/api-reference/next/image#advanced-props

export default function Ringers() {
  const [ringer, setRinger] = useState("/ring/000000.png");

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
  };

  useEffect(() => {
    setInterval(() => {
      fileNamer();
    }, 4000);
  }, []);

  return (
    <>
      <div className="ringer-container">
        <Image
          className="ringer-image"
          src={ringer}
          fill="false"
          sizes="100vw"
          alt={ringer}
        />
      </div>
    </>
  );
}
