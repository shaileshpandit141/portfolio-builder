import React, { FC, JSX } from "react";
import "./HeroSection.css";
import { Button } from "components";

interface HeroSectionProps { }

const HeroSection: FC<HeroSectionProps> = (props): JSX.Element => {
  return (
    <div className="hero-section">
      <figure className="figure">
        <img src="logo192.png" alt="logo192" />
      </figure>
      <h5 className="title">
        Hi, I'm Shailesh
      </h5>
      <p className="bio-tagline">
        I build scalable web apps using Django & React
      </p>
      <div className="cta-buttons">
        <Button type="button">Hire Me</Button>
        <Button type="button">Get CV</Button>
      </div>
    </div>
  )
}

export default HeroSection;
