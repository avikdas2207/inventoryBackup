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
import "./add_city_from.scss";

const AddCityFrom = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  //
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add City
        </Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="City Name"
        />
        <FormControl
          variant="outlined"
          margin="dense"
          className="select-country"
        >
          <InputLabel>Select Contry</InputLabel>
          <Select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            label="Company"
          >
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" margin="dense" className="select-state">
          <InputLabel>Select State</InputLabel>
          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            label="Company"
          >
            <MenuItem value="Kolkata">Kolkata</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Pin Code"
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

export default AddCityFrom;
