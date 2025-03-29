import React, { FC, JSX } from "react";
import "./AboutMeSection.css";

interface AboutMeSectionProps { }

const AboutMeSection: FC<AboutMeSectionProps> = (props): JSX.Element => {
  return (
    <div className="about-me-section">
      <div className="left-grid">
        <figure className="figure">
          <img src="img.jpeg" alt="logo512" />
        </figure>
      </div>
      <div className="right-grid">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod facere molestiae pariatur dignissimos itaque commodi,
          consequuntur adipisci totam ut, eos ipsa similique eius sapiente?
          Maiores velit voluptatum adipisci deserunt harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod facere molestiae pariatur dignissimos itaque commodi,
          consequuntur adipisci totam ut, eos ipsa similique eius sapiente?
          Maiores velit voluptatum adipisci deserunt harum?
        </p>
      </div>
    </div>
  )
}

export default AboutMeSection;
