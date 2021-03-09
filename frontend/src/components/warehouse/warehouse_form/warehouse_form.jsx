import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Tabs,
  Tab,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./warehouse_form.scss";

const WarehouseForm = (props) => {
  const [value, setValue] = useState("BASIC DETAILS");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Warehouse
        </Typography>
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          className="customer-from-tabs"
        >
          <Tab
            value="BASIC DETAILS"
            label={
              <div className="customer-from-tab-details">
                <Typography variant="body2">BASIC DETAILS</Typography>
              </div>
            }
            className="customer-from-tab"
          />
          <Tab
            value="ADDRESS"
            label={
              <div className="customer-from-tab-details">
                <Typography variant="body2">ADDRESS</Typography>
              </div>
            }
            className="customer-from-tab"
          />
        </Tabs>
      </div>
      <div className="add-brand-from">
        {value === "BASIC DETAILS" && (
          <>
            <TextField
              required
              variant="outlined"
              margin="dense"
              fullWidth
              label=" Name"
            />
          </>
        )}
        {value === "ADDRESS" && (
          <>
            <TextField
              required
              variant="outlined"
              margin="dense"
              fullWidth
              label=" Street"
            />
            <FormControl
              variant="outlined"
              margin="dense"
              className="select-country"
              fullWidth
            >
              <InputLabel>Select Contry</InputLabel>
              <Select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Nepal">Nepal</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              margin="dense"
              className="select-state"
            >
              <InputLabel>Select State</InputLabel>
              <Select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                label="State"
              >
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="West Bengal">West Bengal</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              margin="dense"
              className="select-city"
            >
              <InputLabel>Select City</InputLabel>
              <Select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                label="City"
              >
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              label=" ZIP Code"
            />
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              label=" Phone"
            />
            <TextField
              variant="outlined"
              margin="dense"
              fullWidth
              label=" Fax"
            />
          </>
        )}
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

export default WarehouseForm;
