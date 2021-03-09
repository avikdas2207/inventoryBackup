import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./refund.scss";
import FloatingActionButtonZoomRefund from "../../components/refund/floating_button_refund/floating_button_refund";
import RefundTable from "../../components/refund/refund_table/refund_table";

const Refund = () => {
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
                        <RefundTable/>
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomRefund />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default Refund;
