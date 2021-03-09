import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import StateTable from "../../components/state/state_table/state_table.jsx";
import StateFloatingButton from "../../components/state/state_floting_button/state_floting_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./state.scss";

const State = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="state-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <StateTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <StateFloatingButton />
      </div>
    </div>
  );
};
export default State;
