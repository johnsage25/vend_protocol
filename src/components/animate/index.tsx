import * as React from "react";
import ParticleImage, { ParticleOptions } from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 20;
  },
  color: ({ x, y, image }) => "#fff"
};

export default function App() {
  return (
    <ParticleImage
    src={"/imgs/nfc_payment_exp-[Converted].png"}
      scale={0.4}
      entropy={20}
      height={600}
      color="#fff"
      width={600}
      maxParticles={9000}
      backgroundColor="transparent"
      particleOptions={particleOptions}
    />
  );
}