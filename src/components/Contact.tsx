import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <Box sx={{ padding: "50px" }}>
      <Typography
        sx={{ paddingBottom: "10px", marginBottom: "40px", borderBottom: "1px solid gray" }}
        variant="h3"
        align="center"
      >
        Have some question?
      </Typography>
      <form>
        <Box sx={{ width: "50%", margin: "auto", display: "flex", flexDirection: "column", gap: "2em" }}>
          <TextField id="name" name="name" label="Name" type="text" variant="filled" />
          <TextField id="email" name="email" label="Email" type="email" variant="filled" />
          <TextField id="msg" label="Message" multiline rows={4} variant="filled" />
          <Button variant="outlined" color="primary" type="submit">
            Send message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
