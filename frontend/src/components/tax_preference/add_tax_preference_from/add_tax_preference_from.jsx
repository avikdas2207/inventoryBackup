import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
// import AddressFrom from "../address_from/AddressFrom.jsx";
// import CustomerContactPerson from "../customer_contact_person/CustomerContactPerson.jsx";
import "./add_tax_preference_from.scss";

const AddTaxPreferenceFrom = (props) => {
  //
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Tax Preference
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

export default AddTaxPreferenceFrom;
