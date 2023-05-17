import React, { FC, useEffect } from 'react'
import { SectionWrapper } from '../Common/SectionWrapper'
import {
  Code,
  ColumnContainer,
  InformationParagraph,
  ParagraphContainer,
  RowContainer,
  SectionContainer,
  SectionParagraph,
  SubTitle
} from '../Common/common-styles'
import { Box, Button, Grid, Typography } from '@mui/material'

import { DisplayCode } from '../Common/DisplayCode'
import { DisplayCodeResponse } from '../Common/DisplayCodeResponse'
import InfoIcon from '@mui/icons-material/Info'
import { InformationSection } from '../Common/InformationSection'
import { LinkApi } from '../Common/LinkApi'

interface SectionProps {
  title: string
  setSelectedSection: (sectionId: string) => void
  id: string
}

const codeBlock1 = `
const response =  await qortalRequest({
  action: "GET_QDN_RESOURCE_STATUS",
  name: "QortalDemo",
  service: "THUMBNAIL",
  identifier: "qortal_avatar", // Optional
  build: true // Optional - request that the resource is fetched & built in the background
});
`.trim()

const codeBlockResponse = `
{
  "status": "READY",
  "id": "READY",
  "title": "Ready",
  "description": "Ready",
  "localChunkCount": 45,
  "totalChunkCount": 45,
  "percentLoaded": 100.0
}

`.trim()

export const GET_QDN_RESOURCE_STATUS: FC<SectionProps> = ({
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
            width: '100%'
          }}
        >
          <InformationSection>
            <InformationParagraph>
              Equivalent to:{' '}
              <LinkApi url="api-documentation/#/Arbitrary/getResourceStatus_1">
                <Code>
                  {'/arbitrary/resource/status/{service}/{name}/{identifier}'}
                </Code>
              </LinkApi>
            </InformationParagraph>
          </InformationSection>

          <DisplayCode codeBlock={codeBlock1} language="javascript" />
          <DisplayCodeResponse
            codeBlock={codeBlockResponse}
            language="javascript"
          />
        </ParagraphContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}
