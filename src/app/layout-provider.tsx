"use client";  
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../styles/theme";
import { Wrapper } from "../components/Layout/Main/MainLayout-styles";
import { store } from "../state/store";
import { usePathname } from "next/navigation";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";

// Initialize Google Analytics
ReactGA.initialize("G-E1BB62FVTN");

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");
  const location = usePathname();
  console.log({ location });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Wrapper
          className={
            location === "/"
              ? "BGImageMain"
              : location === "/promo"
              ? "BGImagePromo"
              : location === "/features"
              ? "BGImageFeatures"
              : location === "/qort"
              ? "BGQORTPage"
              : location === "/extension"
              ? "BGExtensionPage"
              : ""
          }
        >
          {/* <Header setTheme={(val: string) => setTheme(val)} /> */}
          {children}
          {/* <Footer /> */}
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default LayoutProvider;