import { styled } from "@mui/system";
import HexagonBG from "../../../images/Home/HexagonBG.png";
import HexagonBGLight from "../../../images/Home/HexagonBGLight.png";
import BlurryBGDarkMode from "../../../images/Promo/BlurryBGDarkMode.webp";
import BlurryBGDarkModeMobile from "../../../images/Promo/BlurryBGDarkModeMobile.webp";
import BlurryBGLightMode from "../../../images/Promo/BlurryBGLightMode.webp";
import BlurryBGLightModeMobile from "../../../images/Promo/BlurryBGLightModeMobile.webp";
import FeaturesHexagonBG from "../../../images/Features/FeaturesHexagonBG.png";

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "2rem 1rem",
  gap: "20px",
  "&.BGImageMain": {
    backgroundImage:
      theme.palette.mode === "dark"
        ? `url(${HexagonBG})`
        : `url(${HexagonBGLight})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "contain",
    "@media (max-width: 600px)": {
      backgroundPosition: "top",
      backgroundSize: "auto"
    }
  },
  "&.BGImagePromo": {
    backgroundImage:
      theme.palette.mode === "dark"
        ? `url(${BlurryBGDarkMode})`
        : `url(${BlurryBGLightMode})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("lg")]: {
      backgroundImage:
        theme.palette.mode === "dark"
          ? `url(${BlurryBGDarkModeMobile})`
          : `url(${BlurryBGLightModeMobile})`,
      backgroundSize: "cover"
    }
  },
  "&.BGImageFeatures": {
    position: "relative",
    zIndex: 1,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${FeaturesHexagonBG})`,
      backgroundRepeat: "no-repeat",
      opacity: 0.1,
      zIndex: -1
    }
  }
}));