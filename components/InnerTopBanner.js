import Image from "next/image";
const InnerTopBanner = (props) => {
  let srcs;
  if (props.cimage == "") {
    srcs = "/images/about-in.jpg";
  } else {
    srcs = props.cimage;
  }
  return (
    <section className="bannerin overlay">
      <Image
        src={srcs}
        className="img-fullwidth"
        width="1600"
        height="499"
        rel="preload"
        alt="about"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default InnerTopBanner;
