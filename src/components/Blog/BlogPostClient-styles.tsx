import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import { cambonLight, lovelo, raleway } from "../../app/fonts";

export const BlogPostContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "25px 300px",
  "@media(max-width: 1300px)": {
    padding: "25px 150px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "25px 100px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 4px"
  }
}));

export const BackToBlogButton = styled(Button)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  position: "absolute",
  top: "10px",
  left: "10px",
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.main,
    filter: "brightness(1.3)"
  }
}));

export const BlogPostTitle = styled("h1")({
  fontFamily: lovelo.style.fontFamily,
  fontSize: "40px",
  fontWeight: 500,
  marginBottom: "20px",
  textAlign: "center",
  color: "#fff"
});

export const BlogMainImage = styled(Image)({
  width: "100%",
  height: "300px",
  objectFit: "contain",
  userSelect: "none"
});

export const BlogDateAndCategoryRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
    marginTop: "55px"
  }
}));

export const BlogDate = styled(Typography)(({ theme }) => ({
  fontFamily: raleway.style.fontFamily,
  fontSize: "17px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.primary.light,
  userSelect: "none"
}));

export const BlogBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  wordWrap: "break-word",
  fontFamily: cambonLight.style.fontFamily,
  fontSize: "18px",
  fontWeight: 300,
  letterSpacing: "0.2px",
  color: theme.palette.text.primary,
  "& p": {
    lineHeight: "1.6",
    margin: "10px 0",
    "& sup": {
      color: `${theme.palette.secondary.main} !important`,  
    }
  },
  "& a": {
      color: `${theme.palette.secondary.main} !important`,  
  },
  "& em sup": {
    color: `${theme.palette.secondary.main} !important`,  
  },
}));

export const BlogDivider = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "1px",
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));
