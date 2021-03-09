import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./purchase_return.scss";
import PurchaseReturnTable from "../../components/Voucher/purchase_return/purchase_return_table/purchase_return_table";
import FloatingActionButtonZoomBill from '../../components/bill_sundries/floating_button_bill/floating_button_bill.jsx';

const PurchaseReturn = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <PurchaseReturnTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default PurchaseReturn;
