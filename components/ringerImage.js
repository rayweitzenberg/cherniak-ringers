import Image from "next/image";

export default function RingerImage(ringerNum) {
//   console.log("rinterNum", ringerNum.ringerNum);

  return (
    <div className="ringer-container">
      <Image
        className="ringer-image ringer-image-1"
        src={"/ring/" + ringerNum.ringerNum + ".png"}
        priority
        fill="false"
        sizes="100vw 100vw"
        alt={"/ring/" + ringerNum.ringerNum + ".png"}
      />
      <h3 className="ringer-title">Ringers #{ringerNum.ringerNum}</h3>
    </div>
  );
}
