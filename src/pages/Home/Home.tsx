import { useState, FC, useEffect, useRef } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { QortalBigLogo } from "../../components/Common/Logo/QortalBigLogo";
// import { Lines } from "../../components/Common/Lines/Lines";
import {
  StyledButton,
  HeaderText,
  SubHeaderText,
  FooterRow,
  ButtonRow,
  VideoRow,
  VideoTitle,
  MainRow,
  MainCol,
  QortalWordLogo,
  QORTPromoModal,
  FlexRow,
  CustomDiscordButton,
  DiscordLogo
} from "./Home-styles";
import QortalWordLogoImg from "../../images/Home/QortalWordLogo.svg";
import OperatingSystem from "../../components/OperatingSystem/OperatingSystem";
import { WindowsSVG } from "../../components/Common/Icons/WindowsSVG";
import { LinuxSVG } from "../../components/Common/Icons/LinuxSVG";
import { AppleSVG } from "../../components/Common/Icons/AppleSVG";
import { CommonModal } from "../../components/Common/CommonModal/CommonModal";
import { YoutubePlaceholder } from "../../components/YouTube/YoutubePlaceholder";
import { Showcase } from "../../components/Showcase/Showcase";
import { RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import { setOS } from "../../state/features/osSlice";
import { UAParser } from "ua-parser-js";
import { useNavigate } from "react-router-dom";
import JoinDiscordLogo from "../../images/Home/JoinDiscordLogo.png";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallToMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Determine which OS they're on
  const parser = new UAParser();

  // Scroll into view when they come from features section
  const osRef = useRef<HTMLDivElement>(null);

  // Props received from the features component to know which OS they're on
  const os = useSelector((state: RootState) => state.OS.os);

  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [firstTimeVisitor, setFirstTimeVisitor] = useState<boolean>(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  useEffect(() => {
    const isFirstTimeVisitor = localStorage.getItem("isFirstTimeVisitor");

    if (!isFirstTimeVisitor) {
      // Perform actions for first-time visitors
      setFirstTimeVisitor(true);
      // Set the flag in localStorage
      localStorage.setItem("isFirstTimeVisitor", "false");
    } else {
      return;
    }
  }, []);

  // Redirect to /qort for mobile users
  // useEffect(() => {
  //   const isFirstTimeVisitor = localStorage.getItem("isFirstTimeVisitor");
  //   const userOS = parser.getOS().name;

  //   if (!isFirstTimeVisitor) {
  //     // Perform actions for first-time visitors
  //     setFirstTimeVisitor(true);
  //     // Set the flag in localStorage
  //     localStorage.setItem("isFirstTimeVisitor", "false");
  //     // Redirect to /qort for mobile users
  //     if (userOS?.includes("Android" || "iOS")) {
  //       navigate("/qort");
  //     }
  //   } else {
  //     return;
  //   }
  // }, []);

  // Clear the OS passed props on unmount
  useEffect(() => {
    if (os) {
      setOperatingSystem(os);
      if (osRef.current) {
        osRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {
      if (os) {
        dispatch(setOS(""));
      }
    };
  }, [os]);

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      {/* <Lines /> */}
      <MainRow container>
        <MainCol item xs={12} sm={7}>
          <HeaderText>
            <span style={{ color: theme.palette.secondary.main }}>
              The Future{" "}
            </span>
            <span>of the Internet is Here: </span>
            <QortalWordLogo src={QortalWordLogoImg} alt="QortalWordLogoImg" />
          </HeaderText>
          <SubHeaderText>
            Join a Decentralized World Where You Have Complete Control!
          </SubHeaderText>
          <ButtonRow>
            <StyledButton
              onClick={() => setOperatingSystem("windows")}
              variant="contained"
            >
              <WindowsSVG color={"#ffffff"} height={"25"} width={"25"} />
              Windows
            </StyledButton>
            <StyledButton
              onClick={() => setOperatingSystem("mac")}
              variant="contained"
            >
              <AppleSVG color={"#ffffff"} height={"25"} width={"25"} />
              Mac
            </StyledButton>
            <StyledButton
              onClick={() => setOperatingSystem("linux")}
              variant="contained"
            >
              <LinuxSVG color={"#ffffff"} height={"25"} width={"25"} />
              Linux
            </StyledButton>
          </ButtonRow>
        </MainCol>
        <MainCol
          item
          xs={12}
          sm={5}
          style={{
            transform: !isMobile ? "translateY(-25px)" : "none"
          }}
        >
          <QortalBigLogo />
        </MainCol>
      </MainRow>
      {!operatingSystem && <Showcase osRef={osRef} />}
      <FooterRow container>
        {!operatingSystem ? (
          <>
            <VideoRow>
              <VideoTitle variant="h2">
                Watch the Q-Apps Intro Video!
              </VideoTitle>
              {showVideoPlayer ? (
                <iframe
                  src="https://www.youtube.com/embed/X7l2R0LF_5U?autoplay=1"
                  loading="lazy"
                  title="Introducing Qortal Q-Apps"
                  allowFullScreen
                  allow="autoplay"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                ></iframe>
              ) : (
                <YoutubePlaceholder
                  isModal={false}
                  onClick={handleVideoClick}
                />
              )}
            </VideoRow>
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </FooterRow>

      {/* Change this boolean before pushing to PROD */}
      {/* {firstTimeVisitor && (
        <CommonModal
          openModal={firstTimeVisitor}
          onClickFunc={() => {
            setFirstTimeVisitor(false);
          }}
          customStyles={{
            padding: 0,
            top: "10%",
            maxHeight: "500px",
            minHeight: isMobile
              ? "300px !important"
              : isSmallToMediumScreen && !isMobile
              ? "400px !important"
              : "500px",
            height: "-webkit-fill-available",
            width: isSmallToMediumScreen ? "90% !important" : "850px",
            minWidth: "auto",
            backgroundColor: "black"
          }}
        >
          <QORTPromoModal />
          <FlexRow>
            <CustomDiscordButton onClick={() => {
              window.open("https://discord.gg/NqFNtRDm2t", "_blank");
            }}>
              <DiscordLogo src={JoinDiscordLogo} alt="Join Discord Logo" />
              Join Discord
            </CustomDiscordButton>
          </FlexRow>
        </CommonModal>
      )} */}
    </>
  );
};

export default Home;
