import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import TaxesTable from "../../components/taxes/taxes_table/taxes_table.jsx";
import FloatingActionButtonZoomTaxes from "../../components/taxes/floating_button_taxes/floating_button_taxes";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./taxes.scss";

const Taxes = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="customer-container">
      <Grid>
        <Paper>
          <TaxesTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomTaxes />
      </div>
    </div>
  );
};
export default Taxes;
