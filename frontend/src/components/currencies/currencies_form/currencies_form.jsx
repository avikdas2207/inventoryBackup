import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Switch,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./currencies_form.scss";

const CurrenciesForm = (props) => {
  const [isDefaultCurrency, setIsDefaultCurrency] = useState(false);
  return (
    <div className="CustomerDetailsFrom">
      <div className="header">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Currency
        </Typography>
      </div>
      <div className="add-brand-from">
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Currency Name"
          className="currency-name"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Symbol"
          className="currency-symbol"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Currency Code"
          className="currency-code"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Currency Format"
          className="currency-format"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Exchange Rate"
          className="currency-exchange-rate"
        />
        <TextField
          required
          variant="outlined"
          margin="dense"
          label="Effective Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          className="currency-effective-date"
        />
        <FormControlLabel
          control={
            <Switch
              checked={isDefaultCurrency}
              onChange={(e) => setIsDefaultCurrency(e.target.checked)}
            />
          }
          label="Is Default Currency"
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

export default CurrenciesForm;
