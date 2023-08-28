import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Address() {
  const [userState, setuserState] = useState();
  React.useEffect(() => {
    return () => {
      const user = localStorage.getItem("userdetail");
      // // console.log("use", JSON.parse(user));
      setuserState(JSON.parse(user));
    };
  }, [userState]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userState ? userState[0].FirstName : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={userState ? userState[0].LastName : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={userState ? userState[0].Address : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={userState ? userState[0].Address_2 : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={userState ? userState[0].City : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            fullWidth
            variant="standard"
            value={userState ? userState[0].County : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={userState ? userState[0].Post_Code : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={userState ? userState[0].Country_Region_Code : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
