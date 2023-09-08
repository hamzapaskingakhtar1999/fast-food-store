import React from "react";

/* CSS File*/
import "./About.css";

/* Images */
import Chef from "../../assets/Chef.jpg";

/* Components */
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";

/* Data */
import { secondary } from "../../data/HeroData";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-left">
          <img src={Chef} />
        </div>
        <div className="about-right">
          <div className="about-right-container">
            <h1>
              <span style={{ color: "#29A56C" }}>Welcome</span> to Seiwa Foods
            </h1>
            <p className="about-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p className="about-paragraph">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Hero data={secondary} />
      <Features />
    </div>
  );
};

export default About;
