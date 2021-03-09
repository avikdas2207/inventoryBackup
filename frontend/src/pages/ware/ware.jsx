import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header.jsx';
import WarehouseTable from '../../components/warehouse/warehouse_table/warehouse_table.jsx';
import FloatingActionButtonWarehouse from '../../components/warehouse/floating_button_warehouse/floating_button_warehouse.jsx';
import Footer from '../../components/fixed_footer/fixed_footer.jsx';
import CustomizedDialogs from '../../components/dialog/dialog.jsx';
import "./ware.scss";

const Warehouse = () => {
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
                        <WarehouseTable />
                    </Paper>
                </Grid>
            <div className="action-button">
                <FloatingActionButtonWarehouse />
            </div>

        </div>
    );
}
export default Warehouse;
