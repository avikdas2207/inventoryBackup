import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./purchase_order.scss";
import PurchaseOrderTable from "../../components/Voucher/purchase_order/purchase_order_table/purchase_order_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/purchase_order/floating_button_purchase_order/floating_button_purchase_order';

const PurchaseOrder = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <PurchaseOrderTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default PurchaseOrder;
