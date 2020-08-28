import React from "react";

import FirstImage from "./1.jpg";
import SecondImage from "./2.jpg";
import ThirdImage from "./3.jpg";
import FourthImage from "./4.jpg";
import FifthImage from "./5.jpg";
import SixthImage from "./6.jpg";
import SeventhImage from "./7.jpg";
import EighthImage from "./8.jpg";
import NinethImage from "./9.jpg";

export default function SubsidiariesBottom() {
  const images = [
    FirstImage,
    SecondImage,
    ThirdImage,
    FourthImage,
    FifthImage,
    SixthImage,
    SeventhImage,
    EighthImage,
    NinethImage,
  ];
  return (
    <div>
      <div className="bottom">
        <div className="subsidiaries-showcase">
          {images.map((image) => (
            <div className="subsidiary">
              <img src={image} alt="subsidiary-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
