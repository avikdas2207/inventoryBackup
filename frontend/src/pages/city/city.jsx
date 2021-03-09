import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import CityTable from "../../components/city/city_table/city_table.jsx";
import CityFloatingButton from "../../components/city/city_floatint_button/city_floatint_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
// import CityDialogs from '../../components/city/city_dialog/city_dialog.jsx';
import "./city.scss";

const City = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="city-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <CityTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <CityFloatingButton />
      </div>
    </div>
  );
};
export default City;
