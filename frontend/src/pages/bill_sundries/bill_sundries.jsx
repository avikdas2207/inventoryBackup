import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./bill_sundries.scss";
import BillSundriesTable from "../../components/bill_sundries/bill_sundries_table/bill_sundries_table.jsx";
import FloatingActionButtonZoomBill from '../../components/bill_sundries/floating_button_bill/floating_button_bill.jsx';

const BillSundries = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <BillSundriesTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default BillSundries;
