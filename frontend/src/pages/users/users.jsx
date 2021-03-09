import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./users.scss";
import FloatingActionButtonZoomUsers from "../../components/users/floating_button_users/floating_button_users.jsx";
import UsersTable from "../../components/users/users_table/users_table";

const Users = () => {
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
                        <UsersTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonZoomUsers />
            </div>
            {/* <div className="fixed-footer">
                <Footer />
            </div> */}

        </div>
    );
}
export default Users;
