import React from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const Footer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "5em",
    backgroundColor: "#1A2027"
  });

  return (
    <div>
      <Footer>
        <Typography>Copyright © 2022. All rights reserved.</Typography>
      </Footer>
    </div>
  );
};

export default Footer;
