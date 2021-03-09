import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import CountryTable from "../../components/country/country_table/country_table.jsx";
import FloatingActionButtonZoomCountry from "../../components/country/floating_button_country/floating_button_country.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./country.scss";

const Country = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="country-container">
      <Grid>
        <Paper>
          <CountryTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomCountry />
      </div>
    </div>
  );
};
export default Country;
