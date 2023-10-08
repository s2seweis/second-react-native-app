import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";



import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBuC5weF_sOxjKIowStTTEVFlbx0owDR_k",
  authDomain: "meals-to-go-rn.firebaseapp.com",
  projectId: "meals-to-go-rn",
  storageBucket: "meals-to-go-rn.appspot.com",
  messagingSenderId: "571240376569",
  appId: "1:571240376569:web:bec0438bcb2760e2c0da28"
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
  </>
  );
}