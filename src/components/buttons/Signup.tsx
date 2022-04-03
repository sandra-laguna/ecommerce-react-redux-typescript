import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, DialogActions, FormControlLabel, TextField } from "@mui/material";
import Google from "@mui/icons-material/Google";
import Facebook from "@mui/icons-material/Facebook";
import SignupBtn from "@mui/icons-material/HowToReg";

const Signup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} sx={{ textTransform: "capitalize" }}>
        <SignupBtn sx={{ height: "20px", marginRight: "10px" }} />
        Registrer
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid lightgray;",
            marginBottom: "24px"
          }}
        >
          Registrer
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 24px" }}>
          <Button variant="contained" sx={{ width: "100%", marginBottom: "20px" }}>
            <Google sx={{ height: "20px", marginRight: "10px" }} /> Sign up with Google
          </Button>
          <Button variant="contained" sx={{ width: "100%", marginBottom: "20px" }}>
            <Facebook sx={{ height: "20px", marginRight: "10px" }} /> Sign up with Facebook
          </Button>

          <TextField margin="dense" id="name" label="Username" type="text" fullWidth variant="outlined" />
          <TextField margin="dense" id="name" label="Email Address" type="email" fullWidth variant="outlined" />
          <TextField margin="dense" id="name" label="Password" type="password" fullWidth variant="outlined" />
          <FormControlLabel control={<Checkbox />} label="Check me out" />
        </DialogContent>
        <DialogActions sx={{ padding: "24px" }}>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Signup;
