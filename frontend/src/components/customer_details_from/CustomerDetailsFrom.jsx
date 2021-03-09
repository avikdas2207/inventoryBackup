import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
} from "@material-ui/core";
import AddressFrom from "../address_from/AddressFrom.jsx";
import CustomerContactPerson from "../customer_contact_person/CustomerContactPerson.jsx";
import "./customerDetailsFrom.scss";

const CustomerDetailsFrom = (props) => {
  const [billingAddrCount, setBillingAddrCount] = useState([1,2]);
  const [shipingAddrCount, setShipingAddrCount] = useState([1,2]);
  const [conatctCount, setContatCount] = useState([1]);

  const [value, setValue] = useState("BASIC DETAILS");
  const [salutationValue, setSalutationValue] = useState("");
  const [gstTreatment, setGstTreatment] = useState("");
  const [paymentTerms, setpaymentTerms] = useState("");
  const [currency, setCurrency] = useState("");
  const setBillingCount = () => {
    let countValue= billingAddrCount[billingAddrCount.length -1];
    let tempArr = billingAddrCount;
    tempArr.push(countValue+1);
    setBillingAddrCount(tempArr);
    console.log(billingAddrCount);
  };

  const setShipingCount = () => {
    let countValue= shipingAddrCount[shipingAddrCount.length -1];
    let tempArr = shipingAddrCount;
    tempArr.push(countValue+1);
    setShipingAddrCount(tempArr);
    // setShipingAddrCount(...shipingAddrCount, shipingAddrCount.length);
    console.log(shipingAddrCount);
  };

  const setContact = () => {
    let countValue= conatctCount[conatctCount.length -1];
    let tempArr = conatctCount;
    tempArr.push(countValue+1);
    setContatCount(tempArr);
    // setShipingAddrCount(...shipingAddrCount, shipingAddrCount.length);
    console.log(conatctCount);
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
    <div className="CustomerDetailsFrom">
      <div className="all-tabs">
        <Typography variant="h5" className="CustomerDetailsFrom-title">
          Add Customer
        </Typography>
        <Divider />
        <Tabs
          variant="fullWidth"
          value={value}
          //   onChange={handleChange}
          className="customer-from-tabs"
        >
          <Tab
            disabled
            value="BASIC DETAILS"
            label={
              <div className="customer-from-tab-details">
                <Typography variant="body2">BASIC DETAILS</Typography>
              </div>
            }
            className="customer-from-tab"
          />
          <Tab
            disabled
            value="ADDRESS"
            label={
              <div className="customer-from-tab-details">
                <Typography variant="body2">ADDRESS</Typography>
              </div>
            }
            className="customer-from-tab"
          />
          <Tab
            disabled
            value="CONTACT PERSON"
            label={
              <div className="customer-from-tab-details">
                <Typography variant="body2">CONTACT PERSON</Typography>
              </div>
            }
            className="customer-from-tab"
          />
        </Tabs>
      </div>
      <div className="customer-from">
        {value === "BASIC DETAILS" && (
          <div className="customer-basic-details-from">
            <TextField
              variant="outlined"
              label="Company Name"
              margin="dense"
              className="company-name"
            />
            <TextField
              variant="outlined"
              label="Print Name"
              margin="dense"
              className="print-name"
            />
            <TextField
              variant="outlined"
              label="Email-id"
              margin="dense"
              className="email"
            />
            <FormControl
              variant="outlined"
              margin="dense"
              className="person-salutation"
            >
              <InputLabel>Select Salutation</InputLabel>
              <Select
                value={salutationValue}
                onChange={(e) => setSalutationValue(e.target.value)}
                label="Company"
              >
                <MenuItem value="MR">MR</MenuItem>
                <MenuItem value="MRS">MRS</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              label="First Name"
              margin="dense"
              className="first-name"
            />
            <TextField
              variant="outlined"
              label="Last Name"
              margin="dense"
              className="last-name"
            />
            <FormControl
              variant="outlined"
              margin="dense"
              className="gst-treatment"
            >
              <InputLabel>Select GST Treatment</InputLabel>
              <Select
                value={gstTreatment}
                onChange={(e) => setGstTreatment(e.target.value)}
                label="GST Treatment"
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              margin="dense"
              className="payment-terms"
            >
              <InputLabel>Select Payment Terms</InputLabel>
              <Select
                value={paymentTerms}
                onChange={(e) => setpaymentTerms(e.target.value)}
                label="Company"
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" margin="dense" className="currency">
              <InputLabel>Select Currency</InputLabel>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                label="Company"
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              label="Website"
              margin="dense"
              className="website"
            />
            <TextField
              variant="outlined"
              label="Twitter"
              margin="dense"
              className="twitter"
            />
            <TextField
              variant="outlined"
              label="Facebook"
              margin="dense"
              className="facebook"
            />
            <TextField
              variant="outlined"
              label="Work Phone"
              margin="dense"
              className="work-phone"
            />
            <TextField
              variant="outlined"
              label="Mobile"
              margin="dense"
              className="mobile"
            />
            <TextField
              variant="outlined"
              label="Select Place of Supply"
              margin="dense"
              className="place-of-supply"
            />
            <TextField
              variant="outlined"
              label="Select Tax Preference"
              margin="dense"
              className="tax-reference"
            />
          </div>
        )}
        {value === "ADDRESS" && (
          <div className="customer-address-from">
            <div className="billing-address">
              <Typography variant="caption">Billing-Address</Typography>
              {billingAddrCount.map((eachCount) => {
                return (
                  <AddressFrom count={eachCount} addCount={setBillingCount} />
                );
              })}
            </div>
            <div className="shipping-address">
              <Typography variant="caption">Shiping-Address</Typography>
              {shipingAddrCount.map((eachCount) => {
                return (
                  <AddressFrom count={eachCount} addCount={setShipingCount} />
                );
              })}
            </div>
          </div>
        )}
        {value === "CONTACT PERSON" && (
          <div className="customer-address-from">
            <Typography variant="caption">Billing-Address</Typography>
            {conatctCount.map((eachCount) => {
                return (
                  <AddressFrom count={eachCount} addCount={setContact} />
                );
              })}
            {/* <CustomerContactPerson count={conatctCount} /> */}
          </div>
        )}
      </div>
      <Divider className="divider-2" />
      <div className="action-button">
        <div className="action-all-buttons">
          <Button
            color="secondary"
            onClick={props.close}
            className="action-button-cancel"
          >
            Cancel
          </Button>
          {(value === "CONTACT PERSON" || value === "ADDRESS") && (
            <Button
              variant="outlined"
              onClick={goBack}
              className="action-button-back"
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleChange}
            className="action-button-next"
          >
            {value === "CONTACT PERSON" ? "Submit" : " Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsFrom;
