import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import ManufacturesTable from "../../components/manufactures/manufactures_table/manufactures_table.jsx";
import FloatingActionButtonZoomManufactures from "../../components/manufactures/floating_button_manufactures/floating_button_manufactures.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./manufactures.scss";

const Manufactures = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="manufacturer-container">
      <Grid>
        <Paper>
          <ManufacturesTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomManufactures />
      </div>
    </div>
  );
};
export default Manufactures;
