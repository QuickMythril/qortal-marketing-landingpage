import { styled } from "@mui/system";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { oxygen } from "../../app/fonts";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "15px",
  padding: "25px 10px"
}));

export const HeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontFamily: oxygen.style.fontFamily,
  color: theme.palette.text.primary,
  fontWeight: "400",
}));

export const BackButton = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "7px",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "18px",
  fontWeight: 500,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.light,
    filter: "brightness(0.9)",
  },
}));