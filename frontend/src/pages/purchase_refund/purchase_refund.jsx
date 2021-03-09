import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header.jsx';
import OrgTable from '../../components/org/org_table/org_table.jsx';
import FloatingActionButtonZoomOrg from '../../components/org/floating_button_org/floating_button_org.jsx';
import Footer from '../../components/fixed_footer/fixed_footer.jsx';
import CustomizedDialogs from '../../components/dialog/dialog.jsx';
import "./purchase_refund.scss";
import PurchaseRefundTable from "../../components/purchase_refund/purchase_refund_table/purchase_refund_table.jsx";
import FloatingActionButtonZoomPurchaseRefund from "../../components/purchase_refund/floating_button_purchase_refund/floating_button_purchase_refund.jsx";

const PurchaseRefund = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <PurchaseRefundTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomPurchaseRefund />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default PurchaseRefund;
