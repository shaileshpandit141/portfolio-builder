import React, { FC, JSX } from "react";
import "./PortfolioPage.css";
import { AddSEO } from "SEO";
import HeroSection from "./Sections/HeroSection/HeroSection";
import { useParams } from "react-router-dom";

interface PortfolioPageProps { }

const PortfolioPage: FC<PortfolioPageProps> = (props): JSX.Element => {
  const { username } = useParams<{ username: string }>()
  return (
    <div className="grid-12 portfolio-page">
      <AddSEO
        title="Portfolio"
        description="some portfolio description"
      />
      <div className="grid-start-2-end-2 content">
        <HeroSection />
      </div>
    </div>
  )
}

export default PortfolioPage;
