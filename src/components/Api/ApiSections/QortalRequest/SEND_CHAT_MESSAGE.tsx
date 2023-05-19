import React, { FC, useEffect } from "react";
import { SectionWrapper } from "../Common/SectionWrapper";
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from "../Common/Common-styles";
import { DisplayCode } from "../Common/DisplayCode";
import { DisplayCodeResponse } from "../Common/DisplayCodeResponse";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import { InformationSection } from "../Common/InformationSection";
interface SectionProps {
  title: string;
  setSelectedSection: (sectionId: string) => void;
  id: string;
}

const codeBlock1 = `
const response = await qortalRequest({
  action: "SEND_CHAT_MESSAGE",
  groupId: 0,
  message: "Test"
});
`.trim();

const codeBlockResponse = `
true
`.trim();

const codeBlock2 = `
const response = await qortalRequest({
  action: "SEND_CHAT_MESSAGE",
  destinationAddress: "QZLJV7wbaFyxaoZQsjm6rb9MWMiDzWsqM2",
  message: "Test"
});
`.trim();

const codeBlockResponse2 = `
true
`.trim();

export const SEND_CHAT_MESSAGE: FC<SectionProps> = ({
  title,
  setSelectedSection,
  id
}) => {
  return (
    <SectionWrapper
      title={title}
      setSelectedSection={setSelectedSection}
      id={id}
    >
      <SectionContainer>
        <ParagraphContainer
          sx={{
            width: "100%"
          }}
        >
          <SubTitle>Send a group chat message</SubTitle>
          <InformationSection>
            <InformationParagraph>
              This action requires user approval
            </InformationParagraph>
          </InformationSection>
          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
          <SubTitle>Send a private chat message</SubTitle>
          <DisplayCode codeBlock={codeBlock2} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse2}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};
