import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "components/Header";

import { base } from "./theme";

function App() {
  return (
    <ThemeProvider theme={{ ...base }}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
