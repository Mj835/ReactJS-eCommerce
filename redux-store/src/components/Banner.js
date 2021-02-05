import React from "react";
import BannerAnim from "rc-banner-anim";

const Banner = () => {
  const { Element } = BannerAnim;
  const BgElement = Element.BgElement;

  return (
    <BannerAnim autoPlay autoPlaySpeed={3000} autoPlayEffect={false}>
      <Element key="aaa" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: "url(/images/bannerImage.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Element>
    </BannerAnim>
  );
};

export default Banner;
