import React, { useState } from "react";
import {
    Typography,
    TextField,
    Divider,
    Button,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./purchase_refund_form.scss";

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

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const PurchaseRefundForm = (props) => {
    const [value, setValue] = useState("BASIC DETAILS");
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });
    const [stateSwitch, setStateSwitch] = React.useState({
        checkedA: true,
    });
    const [stateParty, setStateParty] = React.useState({
        age: '',
        name: 'hai',
    });
    const handleChangeParty = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const classes = useStyles();

    const handleChangeType = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleChangeSwitch = (event) => {
        setStateSwitch({ ...stateSwitch, [event.target.name]: event.target.checked });
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
        <div className="purchase-refund-form">
            <div className="all-tabs">
                <Typography variant="h5" className="CustomerDetailsFrom-title">
                    Add Purchase Refund
        </Typography>
                <Divider />

            </div>
            <div className="purchase-refund-form">
                {value === "BASIC DETAILS" && (
                    <div className="customer-basic-details-from">
                        <TextField
                            variant="outlined"
                            label="Voucher Type"
                            margin="dense"
                            className="Name"
                            fullWidth
                        />

                        <TextField
                            variant="outlined"
                            label="Voucher No."
                            margin="dense"
                            className="default-value"
                        />
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Voucher Date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                        <TextField
                            variant="outlined"
                            label="Reference Number"
                            margin="dense"
                            className="Name"
                            fullWidth
                        />
                        <FormControl variant="outlined" className="selectParty" fullWidth margin="dense" >
                            <InputLabel htmlFor="outlined-age-native-simple" className="selectText">Select Party</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChangeParty}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Enter Amount"
                            margin="dense"
                            className="default-value"
                        />
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Payment Date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                        <div className="paymentSelect" >
                            <FormControl variant="outlined" className="selectPayment" margin="dense" >
                                <InputLabel htmlFor="outlined-age-native-simple" className="selectText">Select Payment Mode</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChangeParty}
                                    label="paymentMode"
                                    inputProps={{
                                        name: 'pmode',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className="paymentThrough" margin="dense" >
                                <InputLabel htmlFor="outlined-age-native-simple" className="selectText">Payment Through</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChangeParty}
                                    label="paymentMode"
                                    inputProps={{
                                        name: 'pmode',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="switchComplete" >
                        <Switch
                            checked={stateSwitch.checkedA}
                            onChange={handleChangeSwitch}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            label="is Completed"
                        />
                        </div>
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

export default PurchaseRefundForm;
