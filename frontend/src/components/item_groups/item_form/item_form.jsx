import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "./item_form.scss";

const ItemForm = (props) => {
  const [unit, setUnit] = useState("");
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Item Group
        </Typography>
        <Typography variant="body2">Basic Details</Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label=" Name"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label=" Description"
        />
        <FormControl
          variant="outlined"
          margin="dense"
          className="select-country"
        >
          <InputLabel>Select Unit</InputLabel>
          <Select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            label="Company"
          >
            <MenuItem value="Dozon">Dozon</MenuItem>
          </Select>
        </FormControl>
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

export default ItemForm;
