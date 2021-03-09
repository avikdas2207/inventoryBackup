import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header.jsx';
import OrgTable from '../../components/org/org_table/org_table.jsx';
import FloatingActionButtonZoomOrg from '../../components/org/floating_button_org/floating_button_org.jsx';
import Footer from '../../components/fixed_footer/fixed_footer.jsx';
import CustomizedDialogs from '../../components/dialog/dialog.jsx';
import "./org.scss";

const Org = () => {
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
                        <OrgTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomOrg />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default Org;
