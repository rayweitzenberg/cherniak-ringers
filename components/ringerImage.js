import Image from "next/image";

export default function RingerImage(props) {

  return (
    <div className="ringer-container">
      <Image
        className="ringer-image ringer-image-1"
        src={"/ring/" + props.ringerNum + ".png"}
        priority
        fill="false"
        sizes="100vw 100vw"
        alt={"/ring/" + props.ringerNum + ".png"}
      />
      {/* <h3 className="ringer-title">Ringers #{props.imgTitle}</h3> */}
    </div>
  );
}
