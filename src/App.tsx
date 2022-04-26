import React from "react";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components/macro";

import Header from "components/Header";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";

import { base } from "./theme";

function App() {
  return (
    <ThemeProvider theme={{ ...base }}>
      <Header />
      <div css={{ height: "200px" }} />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
