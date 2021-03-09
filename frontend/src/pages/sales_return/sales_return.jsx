import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./sales_return.scss";
import SalesReturnTable from "../../components/Voucher/sales_return/sales_return_table/sales_return_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/sales_return/floating_button_sales_return/floating_button_sales_return';

const SalesReturn = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <SalesReturnTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default SalesReturn;
