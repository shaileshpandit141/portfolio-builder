import React, { FC, JSX, ReactNode } from "react";
import "./TitleSection.css";

interface TitleSectionProps {
  children: ReactNode
}

const TitleSection: FC<TitleSectionProps> = (props): JSX.Element => {
  return (
    <div className="title-section">
      <h3 className="title">{props.children}</h3>
    </div>
  )
}

export default TitleSection;
