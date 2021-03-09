import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import SalutationTable from "../../components/salutation/salutation_table/salutation_table.jsx";
import SalutationFloatingButton from "../../components/salutation/salutation_floting_button/salutation_floting_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./salutation.scss";

const Brands = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="salutation-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <SalutationTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <SalutationFloatingButton />
      </div>
    </div>
  );
};
export default Brands;
