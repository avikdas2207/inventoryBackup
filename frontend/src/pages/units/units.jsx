import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import UnitsTable from "../../components/units/units_table/units_table.jsx";
import UnitsFloatingButton from "../../components/units/units_floatint_button/units_floatint_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./units.scss";

const Units = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="brands-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <UnitsTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <UnitsFloatingButton />
      </div>
    </div>
  );
};
export default Units;
