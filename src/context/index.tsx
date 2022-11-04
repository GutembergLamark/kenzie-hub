import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";
import LoginProvider from "./LoginProvider";
import ModalProvider from "./ModalProvider";
import RegisterProvider from "./RegisterProvider";

interface IProvider {
  children: ReactNode;
}

function Providers({ children }: IProvider) {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <ModalProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </ModalProvider>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default Providers;
