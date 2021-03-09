import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./sales_invoice.scss";
import SalesInvoiceTable from "../../components/Voucher/sales_invoice/sales_invoice_table/sales_invoice_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/sales_invoice/floating_button_sales_invoice/floating_button_sales_invoice';

const SalesInvoice = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <SalesInvoiceTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default SalesInvoice;
