import "@/styles/global.css";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import "@mantine/core/styles.css";
import { useWindowScroll } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
// import "@mantine/charts/styles.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type props = {
  children: React.ReactNode;
};

const theme: MantineThemeOverride = {
  // Custom ur Theme here
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Poppins, sans-serif",
  },
  colors: {
    primary: [
      "#e3fdfd",
      "#d5f5f5",
      "#b0e9e8",
      "#87dcdb",
      "#66d1d1",
      "#50cbca",
      "#41c7c6",
      "#2eb0af",
      "#1d9d9c",
      "#008887",
    ],
  },
  primaryColor: "primary",
  components: {
    Button: {
      classNames: {
        label: "font-normal",
      },
    },
    Modal: {
      styles: {
        title: {
          fontWeight: "bold",
          fontSize: "20px",
        },
      },
    },
  },
};
export const StyleProvider: React.FC<props> = ({ children }) => {
  const [_, scrollTo] = useWindowScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo({ y: 0 });
  }, [pathname]);

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider labels={{ confirm: "Konfirmasi", cancel: "Batal" }}>
        {children}
      </ModalsProvider>
      <Notifications position="top-center" autoClose={2000} />
    </MantineProvider>
  );
};
