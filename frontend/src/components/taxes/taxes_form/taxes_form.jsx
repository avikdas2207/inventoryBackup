import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "./taxes_form.scss";

const TaxesForm = (props) => {
  const tax_type = "GST";
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add State
        </Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label="Tax Name"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          disabled
          value={tax_type}
          label="Tax Type"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Percentage"
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

export default TaxesForm;
