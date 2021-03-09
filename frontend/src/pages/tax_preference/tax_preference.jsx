import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import TaxPreferenceTable from "../../components/tax_preference/tax_preference_table/tax_preference_table.jsx";
import TaxPreferenceFloatingButton from "../../components/tax_preference/tax_preference_floting_button/tax_preference_floting_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./tax_preference.scss";

const State = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="tax-preferance-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <TaxPreferenceTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <TaxPreferenceFloatingButton />
      </div>
    </div>
  );
};
export default State;
