import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ManageOrgTable from '../../components/manageOrg/manageOrg_table/manageOrg_table.jsx';
import FloatingActionButtonZoomManageOrg from '../../components/manageOrg/floating_button_manageOrg/floating_button_manageOrg.jsx';
import "./manageOrg.scss";

const ManageOrg = () => {
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
                        <ManageOrgTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomManageOrg />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default ManageOrg;
