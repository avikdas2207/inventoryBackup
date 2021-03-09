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

import "./customerContactPerson.scss";
const CustomerContactPerson = (props) => {

    const [salutationValue,setSalutationValue]= useState("")
  return (
    <div className="customer-contact-person-container">
      <div className="contact-count">
        <Typography variant="body1">{props.count}</Typography>
      </div>
      <div className="contact-from">
        <FormControl
          variant="outlined"
          margin="dense"
          className="person-salutation"
        >
          <InputLabel>Select Salutation</InputLabel>
          <Select
            value={salutationValue}
            onChange={(e) => setSalutationValue(e.target.value)}
            label="Salutation"
          >
            <MenuItem value="MR">MR</MenuItem>
            <MenuItem value="MRS">MRS</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="First Name"
          className="contact-fName"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Last Name"
          className="contact-lName"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Email ID"
          className="contact-email"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Work Phone"
          className="contact-work-phone"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Mobile"
          className="contact-mobile"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Designation"
          className="contact-designation"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Department"
          className="contact-department"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Skype Id"
          className="contact-skype-id"
        />
        <Divider />

        <Button size="small" startIcon={<AddIcon />} onClick={props.addCount}>
          Add
        </Button>
      </div>
      <div className="contact-remove-button">
        <Button size="small" startIcon={<RemoveIcon />}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CustomerContactPerson;
