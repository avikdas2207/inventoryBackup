import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import GlobalSearch from "../GlobalSearch/GlobalSearch.jsx"
import companyLogo from "../../assets/image/company-logo.png";
import "./fixed_footer.scss";
import React,{useState} from "react";
import TablePagination from '@material-ui/core/TablePagination';

const Footer = (props) => {
    
  return (
    <AppBar className="footer-container">
      <TablePagination />
    </AppBar>
  );
};

export default Footer;
