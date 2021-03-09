import React, { useState } from "react";
import {
    Typography,
    TextField,
    Divider,
    Button,
    InputAdornment,
} from "@material-ui/core";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import "./manageOrg_form.scss";
const services = require('../../../services/organization');

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

const ManageOrgForm = (props) => {
    const [value, setValue] = useState("BASIC DETAILS");
    const [ name , setName ]= useState("");
    const [subDomain, setSubDomain] = useState("");
    const [subDomainFlag, setSubDomainFlag] = useState(false);
    const [subDomainHelperText, setSubDomainHelperText] = useState(" ");

    const subDomainPattern = "^[A-Za-z ]{3,}$";

   

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

    const addOrganization = () => {
        let values = {
            name : name ,
            database_name : subDomain,
            portal_name : subDomain
        };
        services.addOrg(values).then((res) => {
            console.log(res);
            alert("registered")
        })
            .catch((err) => {
                console.log(err);
                alert("All Feilds are Required")
            })
    }

    
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            required
                            variant="outlined"
                            margin="dense"
                            label="Sub-domain"
                            name="subDomain"
                            className="sub-domain"
                            error={subDomainFlag}
                            helperText={subDomainHelperText}
                            value={subDomain}
                            onChange={(e) => setSubDomain(e.target.value)}
                            // onBlur={validate}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">.localhost:3000</InputAdornment>
                                ),
                            }}
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
                        onClick={addOrganization}
                        className="action-button-next"
                    > Save </Button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrgForm;
