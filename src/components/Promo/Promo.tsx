"use client";
import {
  ArrowImg,
  Container,
  Header,
  DiscordButton,
  ButtonRow,
  SubHeader,
  Features,
  FeatureContainer,
  IconContainer1,
  IconContainer2,
  IconContainer3,
  FeatureText,
  UnderlineScribble
} from "../Promo/Promo-styles";
import ReactGA from "react-ga4";
import { Grid, useTheme } from "@mui/material";
import { OpenSourceSVG } from "../Common/Icons/OpenSourceSVG";
import { HiveSVG } from "../Common/Icons/HiveSVG";
import { ConnectSVG } from "../Common/Icons/ConnectSVG";

const Promo = () => {
  return (
    <>
      <Container container>
        <Grid item xs={12} sm={12}>
          <Header>
            Earn up to{" "}
            <span>
              500 QORT{" "}
              <UnderlineScribble
                src={"/images/Promo/UnderlineScribble.webp"}
                alt="underline-scribble"
                className="underline-scribble"
                width={200}
                height={150}
              />
            </span>{" "}
            by Building a Q-App on Qortal!
            <ArrowImg
              src={"/images/Promo/Arrow.webp"}
              alt="arrow"
              width={500}
              height={500}
            />
          </Header>
          <ButtonRow>
            <DiscordButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Install Qortal Button on Promo page",
                  label: "Clicked Install Qortal Button on Promo page"
                });
                window.open("https://bit.ly/qortal-chrome-extension", "_blank");
              }}
            >
              INSTALL QORTAL 
            </DiscordButton>
          </ButtonRow>
        </Grid>
        {/* <Grid
          item
          sm={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          PROMO VID GOES HERE
        </Grid> */}
      </Container>
      <Features container>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer1>
            <OpenSourceSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer1>
          <SubHeader>Open-Source</SubHeader>
          <FeatureText>
            Qortal's open-source code allows for full transparency and invites
            all developers to contribute, fostering trust and collective growth.
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer2>
            <HiveSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer2>
          <SubHeader>Decentralized</SubHeader>
          <FeatureText>
            Decentralization ensures Qortal is censorship-proof and not
            controlled by a single entity, promising you freedom and equity.
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer3>
            <ConnectSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer3>
          <SubHeader>Peer-To-Peer</SubHeader>
          <FeatureText>
            Qortal's P2P technology ensures that you have direct control over
            your transactions, eliminating intermediaries for greater
            transparency and enhanced security.
          </FeatureText>
        </FeatureContainer>
      </Features>
    </>
  );
};

export default Promo;
