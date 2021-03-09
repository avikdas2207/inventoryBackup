import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import CategoryTable from "../../components/category/catagory_table/category_table.jsx";
import FloatingActionButtonZoomCategory from "../../components/category/floating_button_category/floating_button_category";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./category.scss";

const Category = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="category-container">
      <Grid>
        <Paper>
          <CategoryTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomCategory />
      </div>
    </div>
  );
};
export default Category;
