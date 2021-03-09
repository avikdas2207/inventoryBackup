import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import EnhancedTable from "../../components/table/table.jsx";
import FloatingActionButtonZoom from "../../components/floating_button/floating_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./customer.scss";

const Customers = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="customer-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <EnhancedTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <FloatingActionButtonZoom />
      </div>
    </div>
  );
};
export default Customers;
