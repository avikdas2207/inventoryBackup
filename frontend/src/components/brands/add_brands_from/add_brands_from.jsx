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
import "./add_brands_from.scss";

const AddBrandsFrom = (props) => {
//   
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Brand
        </Typography></div>
      <div className="add-brand-from">
        <TextField variant="outlined" margin="dense" fullWidth label="Brand Name" />
        <TextField variant="outlined" margin="dense" fullWidth label="Brand Description" />

      </div>
      <div className="add-brand-action-button">

        <div className="action-all-buttons">
          <Button variant="contained" className="submit-button">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddBrandsFrom;
