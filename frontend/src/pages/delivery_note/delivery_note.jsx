import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from '../../components/table/table.jsx';
import FloatingActionButtonZoom from '../../components/floating_button/floating_button.jsx';
import "./delivery_note.scss";
import DeliveryNoteTable from "../../components/Voucher/delivery_note/delivery_note_table/delivery_note_table";
import FloatingActionButtonZoomBill from '../../components/Voucher/delivery_note/floating_button_delivery_note/floating_button_delivery_note';

const DeliveryNote = () => {
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <DeliveryNoteTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomBill  />
            </div>

        </div>
    );
}
export default DeliveryNote;
