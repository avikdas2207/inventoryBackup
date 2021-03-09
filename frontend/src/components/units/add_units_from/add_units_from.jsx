import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
} from "@material-ui/core";
// import AddressFrom from "../address_from/AddressFrom.jsx";
// import CustomerContactPerson from "../customer_contact_person/CustomerContactPerson.jsx";
import "./add_units_from.scss";

const AddUnitsFrom = (props) => {
  // const [selectedCountry,setSelectedCountry] =useState("");
  // const [selectedState,setSelectedState] =useState("");

  //
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Units
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

        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="UQC"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Symbol"
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

export default AddUnitsFrom;
