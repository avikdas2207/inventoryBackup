import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import "./bill_form.scss";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

const BillForm = (props) => {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Bill Sundries
        </Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Brand Name"
        />
        <FormControl component="fieldset" className="select-type">
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={type}
            onChange={handleChange}
            className="all-type-radio-button"
          >
            <FormControlLabel
              value="Fixed Amount"
              control={<Radio />}
              label="Fixed Amount"
            />
            <FormControlLabel value="Percentage" control={<Radio />} label="Percentage" />
          </RadioGroup>
        </FormControl>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Brand Description"
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

export default BillForm;
