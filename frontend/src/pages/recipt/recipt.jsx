import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./recipt.scss";
import ReciptTable from "../../components/recipt/recipt_table/recipt_table.jsx";
import FloatingActionButtonZoomReciptcipt from "../../components/recipt/floating_button_recipt/floating_button_recipt.jsx";

const Recipt = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return (
        <div className="customer-container">
                <Grid >
                    <Paper >
                        <ReciptTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomReciptcipt />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default Recipt;
