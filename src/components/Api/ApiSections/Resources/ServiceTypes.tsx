import { FC } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  ParagraphContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle,
  ServiceItem,
  CustomUnorderedList,
  CustomListItem,
  QortalIcon
} from "../Common/Common-styles";
import { useTheme, Grid } from "@mui/material";
import { QortalSVG } from "../../../Common/Icons/QortalSVG";

interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}
export const ServiceTypes: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer>
          <SubTitle>Public services</SubTitle>
          <SectionParagraph>
            The services below are intended to be used for publicly accessible
            data.
          </SectionParagraph>
          <Grid container sx={{ margin: "20px 0" }}>
            <Grid item xs={12} md={6}>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              IMAGE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              THUMBNAIL
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              VIDEO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              AUDIO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PODCAST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              VOICE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ARBITRARY_DATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              JSON
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              DOCUMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              LIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PLAYLIST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              METADATA
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG_POST
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              BLOG_COMMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              GIF_REPOSITORY
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ATTACHMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              FILE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              FILES
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CHAIN_DATA
            </ServiceItem>
            </Grid>
            <Grid item xs={12} md={6}>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              STORE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PRODUCT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              OFFER
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              COUPON
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CODE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              PLUGIN
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              EXTENSION
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              GAME
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              ITEM
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              NFT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              DATABASE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              SNAPSHOT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              COMMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              CHAIN_COMMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              WEBSITE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              APP
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_ATTACHMENT
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_IMAGE
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_AUDIO
            </ServiceItem>
            <ServiceItem>
              <QortalSVG
                color={theme.palette.text.primary}
                height={"18"}
                width={"18"}
              />
              QCHAT_VOICE
            </ServiceItem>
            </Grid>
          </Grid>
          <SubTitle>Private services</SubTitle>
          <SectionParagraph>
            For the services below, data is encrypted for a single recipient,
            and can only be decrypted using the private key of the recipient's
            wallet.
          </SectionParagraph>
          <CustomUnorderedList>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              QCHAT_ATTACHMENT_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              ATTACHMENT_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              FILE_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              IMAGE_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              VIDEO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              AUDIO_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              VOICE_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              DOCUMENT_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              MAIL_PRIVATE
            </CustomListItem>
            <CustomListItem>
              <QortalIcon
                color={theme.palette.text.primary}
                height={"20"}
                width={"20"}
              />
              MESSAGE_PRIVATE
            </CustomListItem>
          </CustomUnorderedList>
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
