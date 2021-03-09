import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./voucher_form.scss";

const VoucherForm = (props) => {
  const [type, setType] = useState("");
  const [isManualNumbering, setIsManualNumbering] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const allType = [
    "Sales",
    "Purchase Refund",
    "Sales Receipt",
    "Purchase Payment",
    "Stock Transfer",
    "Sales Return",
    "Sales Order",
    "Sales Quotation",
    "Sales Invoice",
    "Receipt Note",
    "Indent Order",
  ];
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Voucher Type
        </Typography>
      </div>
      <div className="add-voucher-from">
        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label="Vouher Name"
          className="voucher-name"
        />

        <TextField
          required
          variant="outlined"
          margin="dense"
          fullWidth
          label="Print Name"
          className="print-name"
        />
        <FormControl variant="outlined" margin="dense" className="select-type">
          <InputLabel>Select Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Select Type"
          >
            {allType.map((eachType, index) => {
              return (
                <MenuItem value={eachType} key={index}>
                  {eachType}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Next ID"
          className="voucher-next-id"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Prefix"
          className="voucher-prefix"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Suffix"
          className="voucher-suffix"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Minimum Length"
          className="voucher-minimum-length"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Start Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          className="voucher-start-date"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          className="voucher-end-date"
        />
        <FormControlLabel
          className="voucher-manual-numbering"
          control={
            <Switch
              checked={isManualNumbering}
              onChange={(e) => setIsManualNumbering(e.target.checked)}
            />
          }
          label="Is Manual Numbering"
        />
        <FormControlLabel
          className="voucher-is-primary"
          control={
            <Switch
              disabled
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
            />
          }
          label="Is Primary"
        />
        <FormControlLabel
          className="voucher-is-default"
          control={
            <Switch
              disabled
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
            />
          }
          label="Is Default"
        />
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          multiline
          rows={5}
          rowsMax={9}
          label="Terms And Conditions"
          className="voucher-Terms-and-conditions"
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

export default VoucherForm;
