import "../App.css";
import { useState } from "react";
import FollowerTopRowComponent from "./FollowerTopRowComponent";
import OverviewBottomRowComponent from "./OverviewBottomRowComponent";
import twitter from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-twitter.svg";
import youtube from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-youtube.svg";
import instagram from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-instagram.svg";
import facebook from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-facebook.svg";
import up from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-up.svg";
import down from "../Assets/CSsocial-media-dashboard-with-theme-switcher-master-2/images/icon-down.svg";

function DashBoardPageComponent() {
  const [text1, setText1] = useState<string>("LightModeText");
  const [text3, setText3] = useState<string>("LightModeText");
  const [text2, setText2] = useState<string>("LightModeText2");

  const [background, setBackground] = useState<string>("LightModeBackground");

  const [backgroundGrayBox, setBackgroundGrayBox] =
    useState<string>("backgroundDivLight");

  const [BackgroundLine, setBackgroundLine] =
    useState<string>("BackgroundLine");

  const [SocialMediaCards, setSocialMediaCards] =
    useState<string>("divLightColor");

  const handleToggle = () => {
    if (background !== "LightModeBackground") {
      setBackground("LightModeBackground");
      setBackgroundGrayBox("backgroundDivLight");
      setSocialMediaCards("divLightColor");
      setText1("LightModeText");
      setText3("LightModeText");
      setText2("LightModeText2");
      setBackgroundLine("BackgroundLine");
    } else {
      setBackground("backgroundDark");
      setBackgroundGrayBox("backgroundDivDark");
      setSocialMediaCards("divDarkColor");
      setText1("DarkModeText");
      setText3("DarkModeText2");
      setText2("DarkModeText2");
      setBackgroundLine("darkBackgroundLine");
    }
  };

  return (
    <div
      className={"xl:px-44 sm:px-20 pt-3 px-[26px] screenHeight " + background}
    >
      <div className={backgroundGrayBox}></div>
      <div className="grid md:grid-cols-2 sm:mb-5 mb-10 relative">
        <div className="mt-6 sm:mb-7 mb-5">
          <h1 className={"interBold sm:text-[27px] text-[23.5px] " + text2}>
            Social Media DashBoard
          </h1>
          <p className={"interBold headingText " + text1}>
            Total Followers: 23,004
          </p>
        </div>
        <hr className={BackgroundLine + " md:hidden"} />
        <div className="flex md:justify-end justify-between items-center md:mt-0 mt-4">
          <h1 className={"headingText interBold " + text1}>Dark Mode</h1>
          <label className="switch ml-3">
            <input onClick={handleToggle} type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:gap-8 gap-6 relative">
        <FollowerTopRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          ColorLine={"faceBookLine"}
          logo={facebook}
          arrow={up}
          username={"@nathanf"}
          number={"1987"}
          type={"FOLLOWERS"}
          update={"12 Today"}
          color={"customGreen"}
        />
        <FollowerTopRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          ColorLine={"twitterLine"}
          logo={twitter}
          arrow={up}
          username={"@nathanf"}
          number={"1044"}
          type={"FOLLOWERS"}
          update={"99 Today"}
          color={"customGreen"}
        />
        <FollowerTopRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          ColorLine={"instaLine"}
          logo={instagram}
          arrow={up}
          username={"@nathanf"}
          number={"11k"}
          type={"FOLLOWERS"}
          update={"1099 Today"}
          color={"customGreen"}
        />
        <FollowerTopRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          ColorLine={"youtubeLine"}
          logo={youtube}
          arrow={down}
          username={"Nathan F."}
          number={"8239"}
          type={"SUBSCRIBERS"}
          update={"144 Today"}
          color={"customRed"}
        />
      </div>

      <h1
        className={"mt-10 mb-5 sm:text-[24px] text-[23.5px] interBold " + text3}
      >
        Overview - Today
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-4 pb-10">
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Page Views"}
          logo={facebook}
          number={"87"}
          percent={"3%"}
          arrow={up}
          color={"customGreen"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Likes"}
          logo={facebook}
          number={"52"}
          percent={"2%"}
          arrow={down}
          color={"customRed"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Likes"}
          logo={instagram}
          number={"5462"}
          percent={"2257%"}
          arrow={up}
          color={"customGreen"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Profile Views"}
          logo={instagram}
          number={"52k"}
          percent={"1375%"}
          arrow={up}
          color={"customGreen"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Retweets"}
          logo={twitter}
          number={"117"}
          percent={"303%"}
          arrow={up}
          color={"customGreen"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Likes"}
          logo={twitter}
          number={"507"}
          percent={"553%"}
          arrow={up}
          color={"customGreen"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Likes"}
          logo={youtube}
          number={"107"}
          percent={"19%"}
          arrow={down}
          color={"customRed"}
        />
        <OverviewBottomRowComponent
          SocialMediaCards={SocialMediaCards}
          text1={text1}
          text2={text2}
          type={"Total Views"}
          logo={youtube}
          number={"1407"}
          percent={"12%"}
          arrow={down}
          color={"customRed"}
        />
      </div>
    </div>
  );
}

export default DashBoardPageComponent;
