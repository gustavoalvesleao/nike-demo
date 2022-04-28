import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import Newsletter from "components/Newsletter";

interface Props {
  children: React.ReactElement;
}

function PrimaryLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}

export default PrimaryLayout;
