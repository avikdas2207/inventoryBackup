import React, { useState } from "react";
import {
    Typography,
    TextField,
    Divider,
    Button,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import "./org_form.scss";

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

const OrgForm = (props) => {
    const [value, setValue] = useState("BASIC DETAILS");
    const [salutationValue, setSalutationValue] = useState("");
    const [gstTreatment, setGstTreatment] = useState("");
    const [paymentTerms, setpaymentTerms] = useState("");
    const [currency, setCurrency] = useState("");
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChangeType = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChange = () => {
        if (value === "BASIC DETAILS") {
            setValue("ADDRESS");
        }
        if (value === "ADDRESS") {
            setValue("CONTACT PERSON");
        }
        if (value === "CONTACT PERSON") {
            console.log("submit");
        }

        // setValue("newValue");
    };

    const goBack = () => {
        if (value === "ADDRESS") {
            setValue("BASIC DETAILS");
        }
        if (value === "CONTACT PERSON") {
            setValue("ADDRESS");
        }
    };
    return (
        <div className="BillForm">
            <div className="all-tabs">
                <Typography variant="h5" className="CustomerDetailsFrom-title">
                    Add Organization
        </Typography>
                <Divider />

            </div>
            <div className="customer-from">
                {value === "BASIC DETAILS" && (
                    <div className="customer-basic-details-from">
                        <TextField
                            variant="outlined"
                            label="Name"
                            margin="dense"
                            className="Name"
                            required
                            fullWidth
                        />

                        <TextField
                            variant="outlined"
                            label="Description"
                            margin="dense"
                            className="default-value"
                            required
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            label="HSN"
                            margin="dense"
                            className="default-value"
                            required
                            fullWidth
                        />

                    </div>
                )}
                {value === "ADDRESS" && (
                    <p></p>
                )}
            </div>
            <Divider className="divider-2" />
            <div className="action-button">
                <div className="action-all-buttons">

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick=""
                        className="action-button-next"
                    > Save </Button>
                </div>
            </div>
        </div>
    );
};

export default OrgForm;
