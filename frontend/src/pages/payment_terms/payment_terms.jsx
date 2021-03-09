import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import PaymentTermsTable from "../../components/payment_terms/payment_terms_table/payment_terms_table.jsx";
import PaymentTermsFloatingButton from "../../components/payment_terms/payment_terms_floting_button/payment_terms_floting_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
// import CityDialogs from '../../components/city/city_dialog/city_dialog.jsx';
import "./payment_terms.scss";

const PaymentTerms = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="payment-terms-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <PaymentTermsTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <PaymentTermsFloatingButton />
      </div>
    </div>
  );
};
export default PaymentTerms;
