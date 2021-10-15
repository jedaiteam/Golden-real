import React from "react";
// import { Link } from "react-router-dom";

import prdimg1 from "../../images/icon/document.svg";
import prdimg2 from "../../images/icon/medical1.svg";
import prdimg3 from "../../images/icon/clipboard.svg";
import Title from "../Title/index";

const Features = (props) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  const featres = [
    {
      fIcon: prdimg2,
      des: "We are focused on investments in Medical Technology",
      title: "Medical Technology",
      // link: "/service-single",
    },
    {
      fIcon: prdimg1,
      des: "We invest in the DACH region",
      title: "DACH region",
      // link: "/service-single",
    },
    {
      fIcon: prdimg3,
      des: "We prefer to invest in companies that just obtained CE marking – or that are close to obtaining it and have a sustainable competitive advantage.",
      title: "CE marking",
      // link: "/service-single",
    },
  ];

  return (
    <section
      className={`wpo-features-section section-padding  ${props.featuresClass}`} id="strategy"
    >
      <div className="container">
      <Title title="Investment Strategy"/>
        <div className="row">
          {featres.map((featres, fitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
              <div className="wpo-features-item">
                <div className="wpo-features-icon">
                  <div className="icon">
                    <img src={featres.fIcon} alt="" />
                  </div>
                </div>
                <div className="wpo-features-text">
                  <h2>
                    {/* <Link onClick={ClickHandler}> */}
                      {featres.title}
                    {/* </Link> */}
                  </h2>
                  <p>{featres.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Features;
