import React from "react";
import { ThemeProvider } from "styled-components";

import StoresScreen from "screens/Stores";

import { base } from "./theme";

function App() {
  return (
    <ThemeProvider theme={{ ...base }}>
      <StoresScreen />
    </ThemeProvider>
  );
}

export default App;
