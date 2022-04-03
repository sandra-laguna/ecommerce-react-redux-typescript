import React from "react";
import { NavLink } from "react-router-dom";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box sx={{ padding: "50px", width: "60%", margin: "auto" }}>
      <Typography sx={{ paddingBottom: "10px", borderBottom: "1px solid gray" }} variant="h3" align="center">
        About Us
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "1.2em", padding: "2em 0", textAlign: "center" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sed porro cum, dolorum nemo in,
            perferendis dolorem qui enim voluptas dicta debitis amet sint dolore fuga aut omnis illo iste ipsa autem!
            Nam distinctio laudantium esse consequuntur ab necessitatibus architecto cumque asperiores repellendus
            exercitationem. Atque sapiente id ad dignissimos mollitia in blanditiis quod at eveniet tempora! Totam nisi
            et expedita modi fuga porro aliquid eveniet nemo saepe sunt eius blanditiis doloribus soluta dolorem numquam
            ipsum laudantium incidunt, sapiente quia obcaecati reprehenderit! Temporibus ratione doloribus aspernatur
            odit sunt culpa fugit repellendus suscipit nisi ea dolores consequuntur voluptas explicabo, voluptatem ab
            quam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda qui sed dolore earum autem
            asperiores hic deserunt!
          </Typography>
          <NavLink to="/contact" style={{ margin: "auto" }}>
            <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
              Contact Us
            </Button>
          </NavLink>
        </Box>
        <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="./assets/images/about.jpg" alt="about us" width="400px" />
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
