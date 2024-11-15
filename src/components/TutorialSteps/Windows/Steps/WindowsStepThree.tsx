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

interface WindowsStepThreeProps {}

const WindowsStepThree: FC<WindowsStepThreeProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <StepCard container>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <StepColumn container direction="column">
            <MuseoFont variant="h3">
              Execute the Qortal installer located in your downloads folder.
              Click next next next finish through the install like any normal
              installation.
            </MuseoFont>
          </StepColumn>
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
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
              src={"/Windows/WindowsStepThree.webp"}
              alt="step3"
              width={500}
              height={500}
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </Grid>
      </StepCard>
      {openModal && (
        <Modal
          images={["/Windows/WindowsStepThree.webp"]}
          openModal={openModal}
          onClickFunc={() => setOpenModal(false)}
        ></Modal>
      )}
    </>
  );
};

export default WindowsStepThree;
