import { useState, Fragment } from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  Container,
  NextButton,
  PreviousButton,
  StepDiv,
  StepsColumn,
  ProgressBar,
  LeftArrow,
  RightArrow,
} from "../Steps-styles";
import { useTheme } from "@mui/material";
import WindowsStepOne from "./Steps/WindowsStepOne";
import WindowsStepTwo from "./Steps/WindowsStepTwo";
import WindowsStepThree from "./Steps/WindowsStepThree";
import WindowsStepFour from "./Steps/WindowsStepFour";
import WindowsStepFive from "./Steps/WindowsStepFive";
import useMediaQuery from "@mui/material/useMediaQuery";

const WindowsSteps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [steps] = useState<{ step: number; name: string }[]>([
    {
      step: 1,
      name: "Download Qortal UI",
    },
    {
      step: 2,
      name: "Run Anyway Permission (Possibly Skippable)",
    },
    {
      step: 3,
      name: "Install Qortal UI",
    },
    {
      step: 4,
      name: "Install Qortal Core",
    },
    {
      step: 5,
      name: "Completed! 🎉",
    },
  ]);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [shinyButton, setShinyButton] = useState<boolean>(false);

  return (
    <Container container>
      <StepsColumn item>
        {steps.map((step, index) => {
          return (
            <StepDiv
              item
              key={index}
              selected={currentStep === step.step}
              onClick={() => setCurrentStep(step.step)}
            >
              <Typography
                fontFamily="Montserrat"
                fontWeight="400"
                variant="h4"
                sx={{ userSelect: "none" }}
              >
                Step {step.step}
              </Typography>
              <Typography
                fontFamily="Cambon Light"
                fontWeight="400"
                letterSpacing="0.3px"
                variant="h5"
                sx={{ userSelect: "none" }}
              >
                {step.name}
              </Typography>
            </StepDiv>
          );
        })}
      </StepsColumn>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: "500px",
          justifyContent: "space-between",
          marginTop: isMobile ? "0" : "-20px",
        }}
      >
        <>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                fontFamily="Raleway"
                sx={{ userSelect: "none" }}
              >
                {steps.filter((step) => step.step === currentStep)[0].name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "35px",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <ProgressBar
                  variant="determinate"
                  value={(currentStep / steps.length) * 100}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: "15px",
                }}
              >
                <LeftArrow
                  style={{
                    opacity: currentStep === 1 ? 0.5 : 1,
                    pointerEvents: currentStep === 1 ? "none" : "all",
                    cursor: currentStep === 1 ? "auto" : "pointer",
                  }}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
                <Typography
                  variant="h4"
                  fontFamily="Raleway"
                  sx={{
                    width: "fit-content",
                    backgroundColor: "#6495ed",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "18px",
                    userSelect: "none",
                  }}
                >
                  {`${currentStep} of ${steps.length}`}
                </Typography>
                <RightArrow
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  style={{
                    opacity: currentStep === steps.length ? 0.5 : 1,
                    pointerEvents:
                      currentStep === steps.length ? "none" : "all",
                    cursor: currentStep === steps.length ? "auto" : "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </>
        <Grid item sx={{ padding: "0" }}>
          {currentStep === 1 ? (
            <WindowsStepOne setShinyButton={setShinyButton} />
          ) : currentStep === 2 ? (
            <WindowsStepTwo />
          ) : currentStep === 3 ? (
            <WindowsStepThree />
          ) : currentStep === 4 ? (
            <WindowsStepFour />
          ) : currentStep === 5 ? (
            <WindowsStepFive />
          ) : null}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: currentStep !== 1 ? "space-between" : "flex-end",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <PreviousButton
            sx={{ display: currentStep === 1 ? "none" : "block" }}
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}
          >
            Previous
          </PreviousButton>
          <NextButton
            shiny={{ isOn: shinyButton ? true : false }}
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            Next
          </NextButton>
        </Box>
      </Grid>
    </Container>
  );
};

export default WindowsSteps;