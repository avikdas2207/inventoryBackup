import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./indent_order.scss";
import IndentOrderTable from "../../components/Voucher/indent_order/indent_order_table/indent_order_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/indent_order/floating_button_indent_order/floating_button_indent_order';

const IndentOrder = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <IndentOrderTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default IndentOrder;
