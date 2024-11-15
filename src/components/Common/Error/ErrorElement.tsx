"use client";
import {
  Container,
  HeaderText,
  BackButton,
  HeaderRow,
} from "../../NotFound/NotFound-styles";
import { useTheme } from "@mui/material";
import { WarningSVG } from "../Icons/WarningSVG";
interface ErrorElementProps {
  message: string;
}

export const ErrorElement: React.FC<ErrorElementProps> = ({ message }) => {
  const theme = useTheme();

  return (
    <Container>
      <HeaderRow>
        <WarningSVG
          color={theme.palette.text.primary}
          height={"35"}
          width={"35"}
        />
        <HeaderText variant="h1">{message}</HeaderText>
      </HeaderRow>
      <HeaderText variant="h2">
        Please return home or try refreshing the page!
      </HeaderText>
      <BackButton
        href="/"
      >
        Back Home
      </BackButton>
    </Container>
  );
};
