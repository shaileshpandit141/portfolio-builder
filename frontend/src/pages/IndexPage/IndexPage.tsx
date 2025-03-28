import React from "react";
import "./IndexPage.css";
import { Navigate } from "react-router-dom";
import { AddSEO } from "SEO";
import { isUserAuthenticated } from "utils/isUserAuthenticated";
import { NavLink } from "components";

const IndexPage: React.FC = (props) => {
  if (isUserAuthenticated()) {
    return <Navigate to={"/home"} />;
  }
  return (
    <div className="grid-12 index">
      {/* Metadata settings */}
      <AddSEO
        title="Index"
        description="Welcome to my website, where you can find the best content."
        keywords="home, react, SEO, optimization"
      />
      <div className="grid-start-2-end-2 index-page">
        <h2 className="title">Your Portfolio, Your Story</h2>
        <p className="description">
          Create a professional portfolio that stands out.
          PBuilder makes it easy to showcase your work, skills,
          and achievements with customizable templates, email
          authentication, and seamless portfolio management.
        </p>
        <div className="action-container">
          <NavLink to="/signup" type="link">Get Started</NavLink>
          <NavLink to="/demo" type="link">View Demo</NavLink>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
