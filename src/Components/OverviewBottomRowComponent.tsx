import React from "react";

const OverviewBottomRowComponent = (props: {
  type: string;
  text1: string;
  text2: string;
  color: string;
  SocialMediaCards: string;
  logo: string;
  arrow: string;
  percent: string;
  number: string;
}) => {
  return (
    <div className={props.SocialMediaCards + " pt-6 px-7 pb-3 min-h-28 "}>
      <div className="mb-4 grid grid-cols-2 ">
        <div>
          <h3 className={"interBold headingText " + props.text1}>
            {props.type}
          </h3>
        </div>

        <div className="flex justify-end">
          <img className="interbold" src={props.logo} alt="social media img" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-end">
          <h3 className={"titleText interBold " + props.text2}>
            {props.number}
          </h3>
        </div>

        <div className="flex justify-end">
          <div className="flex mb-[2px] items-end">
            <img
              className="imgArrowSize mr-1 mb-[0.45rem] "
              src={props.arrow}
              alt="arrow for div"
            />
            <p className={"username  interBold " + props.color}>
              {props.percent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewBottomRowComponent;
