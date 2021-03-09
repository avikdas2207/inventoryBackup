import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import CurrenciesTable from "../../components/currencies/currencies_table/currencies_table.jsx";
import FloatingActionButtonZoomCurrencies from "../../components/currencies/floating_button_currencies/floating_button_currencies.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./currencies.scss";

const Currencies = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="currencies-container">
      <Grid>
        <Paper>
          <CurrenciesTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomCurrencies />
      </div>
    </div>
  );
};
export default Currencies;
