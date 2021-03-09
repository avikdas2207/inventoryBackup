import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import BrandsTable from "../../components/brands/brands_table/brands_table.jsx";
import BrandsFloatingButton from "../../components/brands/brands_floting_button/brands_floting_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./brands.scss";

const Brands = () => {
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
            <BrandsTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <BrandsFloatingButton />
      </div>
    </div>
  );
};
export default Brands;
