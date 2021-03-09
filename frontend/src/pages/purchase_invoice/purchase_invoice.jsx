import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./purchase_invoice.scss";
import PurchaseInvoiceTable from "../../components/Voucher/purchase_invoice/purchase_invoice_table/purchase_invoice_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/purchase_invoice/floating_button_purchase_invoice/floating_button_purchase_invoice';

const PurchaseInvoice = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <PurchaseInvoiceTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default PurchaseInvoice;
