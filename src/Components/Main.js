import React from "react";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main-title">
          <h3>Main Body</h3>
        </div>
        <div className="main-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia
          eius suscipit sint aspernatur. Esse dicta vero vitae id temporibus ad
          asperiores mollitia? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Impedit ratione quibusdam quos aliquam, modi rem
          saepe molestiae! Ex accusamus, quasi ipsum molestias vel nobis iusto
          alias sapiente esse fugit, magni officia atque laboriosam pariatur.
        </div>
        <div className="main-images">
          <img
            src="/Images/html2.svg"
            alt="HTML-ICON"
            height="150"
            width="150"
          />
          <img
            src="/Images/html2.svg"
            alt="HTML-ICON"
            height="150"
            width="150"
          />
        </div>
        <div className="main-container">
          <div className="main-container-box">1</div>
          <div className="main-container-box">2</div>
          <div className="main-container-box">3</div>
          <div className="main-container-box">4</div>
          <div className="main-container-box">5</div>
        </div>
      </div>
    </>
  );
};

export default Main;
