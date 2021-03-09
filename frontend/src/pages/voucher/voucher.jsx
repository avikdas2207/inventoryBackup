import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import VoucherTable from "../../components/voucher/voucher_table/voucher_table.jsx";
import FloatingActionButtonZoomVoucher from "../../components/voucher/floating_button_voucher/floating_button_voucher.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./voucher.scss";

const Voucher = () => {
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
          <VoucherTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomVoucher />
      </div>
    </div>
  );
};
export default Voucher;
