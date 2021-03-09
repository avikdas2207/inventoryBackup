import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@material-ui/core";
import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import "./addressFrom.scss";

const AddressFrom = (props) => {
  // const [count, setCount] = useState(1);
  const [countryValue, setCountryValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  return (
    <div className="address-from-container" key={props.count}>
      <div className="address-count">
        <Typography variant="body1">{props.count}</Typography>
      </div>
      <div className="address-from">
        <TextField
          required
          fullWidth
          margin="dense"
          variant="outlined"
          label="Street"
          className="address-street"
        />
        <FormControl
          variant="outlined"
          margin="dense"
          className="select-country"
        >
          <InputLabel>Select Country</InputLabel>
          <Select
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
            label="Country"
          >
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Nepal">Nepal</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="dense" className="select-state">
          <InputLabel>Select State</InputLabel>
          <Select
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
            label="State"
          >
            <MenuItem value="West Bengal">West Bengal</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="dense" className="select-city">
          <InputLabel>Select City</InputLabel>
          <Select
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
            label="City"
          >
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Kolkata">Kolkata</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="ZIP Code"
          className="address-zipcode"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Phone"
          className="address-phone"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Fax"
          className="address-fax"
        />
        <Divider />

        <Button size="small" startIcon={<AddIcon />} onClick={props.addCount}>
          Add
        </Button>
      </div>
      <div className="address-remove-button">
        <Button size="small" startIcon={<RemoveIcon />}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default AddressFrom;
