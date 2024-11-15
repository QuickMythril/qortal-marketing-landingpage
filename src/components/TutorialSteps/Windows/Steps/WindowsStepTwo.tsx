import { FC, useState } from "react";
import {
  MagnifyingGlass,
  ModalScreenshot,
  MuseoFont,
  Screenshot,
  ScreenshotContainer,
  StepCard,
  StepColumn
} from "../../Steps-styles";
import { Grid } from "@mui/material";
import Modal from "../../../Common/Modal/Modal";

interface WindowsStepTwoProps {}

const WindowsStepTwo: FC<WindowsStepTwoProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              You may encounter a Windows Security warning after trying to
              execute the Qortal.exe file you downloaded. Click{" "}
              <span style={{ fontWeight: "bold" }}>"Run Anyway" </span> to
              continue.
            </MuseoFont>
            <MuseoFont variant="h3">
              If this option is not available to you, you may need to change
              your Windows Security settings. Search for{" "}
              <span style={{ fontWeight: "bold" }}>App & Browser Control </span>
              in your System Settings.
            </MuseoFont>
            <MuseoFont variant="h3">
              Under ‘Check apps and files’, select the ‘Warn’ option instead of
              the ‘Block’ option. In Windows 11, this option may be found under
              <span style={{ fontWeight: "bold" }}> ‘Smart App Control’.</span>
            </MuseoFont>
          </StepColumn>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          xs={12}
          sx={{
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ScreenshotContainer onClick={() => setOpenModal(true)}>
            <Screenshot
              src={"/images/Windows/WindowsStepTwo.webp"}
              alt="step1"
              width={500}
              height={500}
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal
          images={["/images/Windows/WindowsStepTwo.webp"]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepTwo;
