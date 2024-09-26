import { FC } from "react";
import {
  PlayButton,
  YoutubeHeader,
  YoutubePlaceholderContainer,
  YoutubeThumbnailImg
} from "./YoutubePlaceholder-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

interface YoutubePlaceholderProps {
  isModal: boolean;
  onClick: () => void;
  YoutubeThumbnail: string;
  YoutubeTitle: string;
}

export const YoutubePlaceholder: FC<YoutubePlaceholderProps> = ({
  isModal,
  onClick,
  YoutubeThumbnail,
  YoutubeTitle
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <YoutubePlaceholderContainer
      style={{
        width:
          isModal && !isMobile
            ? "auto"
            : isModal && isMobile
            ? "auto"
            : !isModal && !isMobile
            ? "600px"
            : "auto"
      }}
      onClick={onClick}
    >
      <YoutubeHeader>{YoutubeTitle}</YoutubeHeader>
      <Image src={YoutubeThumbnail} alt="Youtube Placeholder" width={500} height={500} />
      <PlayButton color={"#E52D27"} height={"80"} width={"80"} />
    </YoutubePlaceholderContainer>
  );
};
