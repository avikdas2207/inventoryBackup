import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import VendorTable from "../../components/vendor/vendor_table/vendor_table.jsx";
import FloatingButtonVendor from "../../components/vendor/floating_button_vendor/floating_button_vendor.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./vendor.scss";

const Customers = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="vendor-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <VendorTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <FloatingButtonVendor />
      </div>
    </div>
  );
};
export default Customers;
