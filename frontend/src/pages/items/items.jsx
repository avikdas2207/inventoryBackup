import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import ItemTable from "../../components/item_groups/item_table/item_table.jsx";
import FloatingActionButtonZoomItem from "../../components/item_groups/floating_button_item/floating_button_item.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import CustomizedDialogs from "../../components/dialog/dialog.jsx";
import "./items.scss";

const Items = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="items-container">
      <Grid>
        <Paper>
          <ItemTable />
        </Paper>
      </Grid>
      <div className="action-button">
        <FloatingActionButtonZoomItem />
      </div>
    </div>
  );
};
export default Items;
