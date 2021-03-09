import React, { useState } from "react";
import { Typography, TextField, Divider, Button } from "@material-ui/core";
import "./country_form.scss";

const CountryForm = (props) => {
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Country
        </Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label=" Name"
        />
      </div>
      <div className="add-brand-action-button">
        <div className="action-all-buttons">
          <Button variant="contained" className="submit-button">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryForm;
