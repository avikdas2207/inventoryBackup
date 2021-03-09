import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./sales_order.scss";
import SalesOrderTable from "../../components/Voucher/sales_order/sales_order_table/sales_order_table";
import FloatingActionButtonZoomBill from '../../components/bill_sundries/floating_button_bill/floating_button_bill.jsx';

const SalesOrder = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <SalesOrderTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default SalesOrder;
