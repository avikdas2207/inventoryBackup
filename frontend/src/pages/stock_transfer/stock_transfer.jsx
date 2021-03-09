import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./stock_transfer.scss";
import StockTransferTable from "../../components/Voucher/stock_transfer/stock_transfer_table/stock_transfer_table";
import FloatingActionButtonZoomBill from '../../components/bill_sundries/floating_button_bill/floating_button_bill.jsx';

const StockTransfer = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <StockTransferTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default StockTransfer;
