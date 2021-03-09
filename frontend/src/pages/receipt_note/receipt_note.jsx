import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./receipt_note.scss";
import ReceiptNoteTable from "../../components/Voucher/receipt_note/receipt_note_table/receipt_note_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/receipt_note/floating_button_receipt_note/floating_button_receipt_note';

const ReceiptNote = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <ReceiptNoteTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default ReceiptNote;
