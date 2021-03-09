import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header.jsx";
import GstTreatmentTable from "../../components/gst_treatment/gst_treatment_table/gst_treatment_table.jsx";
import GstTreatmentFloatingButton from "../../components/gst_treatment/gst_treatment_floating_button/gst_treatment_floating_button.jsx";
import Footer from "../../components/fixed_footer/fixed_footer.jsx";
import "./gst_treatment.scss";

const GstTreatment = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="gst-treatment-container">
      <div className="first-grid">
        <Grid>
          <Paper>
            <GstTreatmentTable />
          </Paper>
        </Grid>
      </div>
      <div className="action-button">
        <GstTreatmentFloatingButton />
      </div>
    </div>
  );
};
export default GstTreatment;
