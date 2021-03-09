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
import "./category_form.scss";

const AddCategoryFrom = (props) => { 
    const [parentCategory,setParentCategory] =useState("");
    const [selectedState,setSelectedState] =useState("");

 
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Category
        </Typography></div>
      <div className="add-brand-from">
        <TextField required variant="outlined" margin="dense" fullWidth label=" Name" />
        <TextField variant="outlined" margin="dense" fullWidth label="Description" />
        <TextField variant="outlined" margin="dense" fullWidth label="HSN" />
        
            <FormControl
              variant="outlined"
              margin="dense"
              className="select-parent-category"
            >
              <InputLabel>Select Parent Category</InputLabel>
              <Select
                value={parentCategory}
                onChange={(e) => setParentCategory(e.target.value)}
                label="Company"
              >
                <MenuItem value="Category1">Category1</MenuItem>
                <MenuItem value="Category2">Category1</MenuItem>
              </Select>
            </FormControl>
            

      </div>
      <div className="add-brand-action-button">

        <div className="action-all-buttons">
          <Button variant="contained" className="submit-button">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryFrom;
