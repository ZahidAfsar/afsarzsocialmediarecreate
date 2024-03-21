import React from "react";

const FollowTopRowComponent = (props: {
  ColorLine: string;
  text1: string;
  text2: string;
  number: string;
  type: string;
  update: string;
  logo: string;
  arrow: string;
  username: string;
  color: string;
  SocialMediaCards: string;
}) => {
  return (
    <div className={props.SocialMediaCards}>
      <div className={"h-1 LineBorderRadius mb-1 " + props.ColorLine}></div>

      <div className="p-5">
        <div className="flex justify-center items-center min-h-[24px]">
          <img className="h-full" src={props.logo} alt="social media Img" />

          <h1 className={"nameText interBold ml-2 " + props.text1}>
            {props.username}
          </h1>
        </div>

        <div className={"text-center interBold followersText " + props.text2}>
          {props.number}
        </div>

        <h4
          className={"text-center followers interLight nameText " + props.text1}
        >
          {props.type}
        </h4>

        <div className="flex justify-center mt-5">
          <div className="flex flex-wrap-reverse content-center mr-1">
            <img
              className="imgArrowSize mb-[1px]"
              src={props.arrow}
              alt="arrow img"
            />
          </div>
          <h4 className={"interBold nameText " + props.color}>
            {props.update}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FollowTopRowComponent;
