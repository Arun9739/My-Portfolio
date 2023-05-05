import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const data = [
    {
      name: "Frontend development",
    },
    {
      name: "JavaScript",
    },
    {
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "React JS",
    },
    {
      name: "Node JS",
    },
    {
      name: "MongoDB",
    },
    {
      name: "C",
    },
    {
      name: "C++",
    },
    {
      name: "CSS",
    },
    {
      name: "SQL",
    },
    {
      name: "Git",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "JQuery",
    },
  ];

  const colors = [
    "#800080",
    "#FF0000",
    "#00FF00",
    "#800000",
    "#888000",
    "#00C49F",
    "#ADD8E6",
    "#FF1142",
    "#0088FE",
    "#FFBB28",
    "#008000",
    "#8181F7",
    "#585858",
    "#FE2EF7",
    "#00FFFF",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  }; 

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
