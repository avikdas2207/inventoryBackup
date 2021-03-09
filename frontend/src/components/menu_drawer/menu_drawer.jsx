import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import CategoryIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ScoreIcon from "@material-ui/icons/Score";
import StyleIcon from "@material-ui/icons/Style";
import WcIcon from "@material-ui/icons/Wc";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TimelineIcon from "@material-ui/icons/Timeline";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import BuildIcon from "@material-ui/icons/Build";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleIcon from "@material-ui/icons/People";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import TocIcon from "@material-ui/icons/Toc";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import SubjectIcon from "@material-ui/icons/Subject";
import DvrIcon from "@material-ui/icons/Dvr";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import NoteIcon from "@material-ui/icons/Note";
import DescriptionIcon from "@material-ui/icons/Description";
import AssignmentIcon from "@material-ui/icons/Assignment";
import UndoIcon from "@material-ui/icons/Undo";
import TransformIcon from "@material-ui/icons/Transform";
import clsx from "clsx";
import history from '../../History.js';
import "./menu_drawer.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openTrans, setOpenTrans] = React.useState(false);
  const [openVoucher, setOpenVoucher] = React.useState(false);

  // useEffect(() => {
  //   console.log(props);
  // });
  const handleClick = (e) => {
    setOpen(!open);
    // props.setSelectedMenu(e, "Masters");
  };
  const handleClickTrans = (e) => {
    setOpenTrans(!openTrans);
    // props.setSelectedMenu(e, "Transactions");
  };
  const handleClickVoucher = (e) => {
    setOpenVoucher(!openVoucher);
    // props.setSelectedMenu(e, "Vouchers");
  };

  return (
    <List className="sideNav-list">
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Dashboard",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Dashboard",
          })}
        >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary="Dashboard"
          onClick={(e) => props.setSelectedMenu(e, "Dashboard")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Manage Organizations")}
        className={clsx(classes.nested, "list-item", {
          "list-item-active": props.selectedMenu === "Manage Organizations",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Manage Organizations")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Manage Organizations",
          })}
        >
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText
          primary="Manage Organizations"
          onClick={(e) => props.setSelectedMenu(e, "Manage Organizations")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Customers")}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Customers",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Customers")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Customers",
          })}
        >
          <PersonIcon />
        </ListItemIcon>
        <ListItemText
          primary="Customers"
          onClick={(e) => props.setSelectedMenu(e, "Customers")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Vendors")}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Vendors",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Vendors")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Vendors",
          })}
        >
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Vendors"
          onClick={(e) => props.setSelectedMenu(e, "Vendors")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Items")}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Items",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Items",
          })}
        >
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText
          primary="Items"
          onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={handleClick}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Masters",
        })}
      >
        <ListItemIcon
          // onClick={(e) => props.setSelectedMenu(e, "Masters")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Masters",
          })}
        >
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText
          primary="Masters"
          // onClick={(e) => props.setSelectedMenu(e, "Items")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
        {open ? (
          <ExpandMore
            className={clsx("expend-icon", {
              "expend-icon-inactive": props.isDrawerMin,
            })}
          />
        ) : (
          <NavigateNextIcon
            className={clsx("shrink-icon", {
              "shrink-icon-inactive": props.isDrawerMin,
            })}
          />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Bill Sundries",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Bill Sundries",
              })}
            >
              <NewReleasesIcon />
            </ListItemIcon>
            <ListItemText
              primary="Bill Sundries"
              onClick={(e) => props.setSelectedMenu(e, "Bill Sundries")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Brands")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Brands",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Brands")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Brands",
              })}
            >
              <BrandingWatermarkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Brands"
              onClick={(e) => props.setSelectedMenu(e, "Brands")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Category")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Category",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Category")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Category",
              })}
            >
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText
              primary="Category"
              onClick={(e) => props.setSelectedMenu(e, "Category")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button onClick={(e) => props.setSelectedMenu(e, "Cities")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Cities",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Cities")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Cities",
              })}
            >
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Cities"
              onClick={(e) => props.setSelectedMenu(e, "Cities")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Countries")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Countries",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Countries")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Countries",
              })}
            >
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Countries"
              onClick={(e) => props.setSelectedMenu(e, "Countries")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Currencies")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Currencies",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Currencies")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Currencies",
              })}
            >
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Currencies"
              onClick={(e) => props.setSelectedMenu(e, "Currencies")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "GST Treatments",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "GST Treatments",
              })}
            >
              <ScoreIcon />
            </ListItemIcon>
            <ListItemText
              primary="GST Treatments"
              onClick={(e) => props.setSelectedMenu(e, "GST Treatments")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            conClick={(e) => props.setSelectedMenu(e, "Item Groups")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Item Groups",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Item Groups")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Item Groups",
              })}
            >
              <FileCopyIcon />
            </ListItemIcon>
            <ListItemText
              primary="Item Groups"
              onClick={(e) => props.setSelectedMenu(e, "Item Groups")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Manufacturers",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Manufacturers",
              })}
            >
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText
              primary="Manufacturers"
              onClick={(e) => props.setSelectedMenu(e, "Manufacturers")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Payment Terms",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Payment Terms",
              })}
            >
              <StyleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Payment Terms"
              onClick={(e) => props.setSelectedMenu(e, "Payment Terms")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Salutations")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Salutations",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Salutations")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Salutations",
              })}
            >
              <WcIcon />
            </ListItemIcon>
            <ListItemText
              primary="Salutations"
              onClick={(e) => props.setSelectedMenu(e, "Salutations")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "States")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "States",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "States")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "States",
              })}
            >
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText
              primary="States"
              onClick={(e) => props.setSelectedMenu(e, "States")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Taxes")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Taxes",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Taxes")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Taxes",
              })}
            >
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Taxes"
              onClick={(e) => props.setSelectedMenu(e, "Taxes")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Tax Preference",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Tax Preference",
              })}
            >
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText
              primary="Tax Preference"
              onClick={(e) => props.setSelectedMenu(e, "Tax Preference")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Units")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Units",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Units")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Units",
              })}
            >
              <BuildIcon />
            </ListItemIcon>
            <ListItemText
              primary="Units"
              onClick={(e) => props.setSelectedMenu(e, "Units")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Voucher Types")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Voucher Types",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Voucher Types")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Voucher Types",
              })}
            >
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText
              primary="Voucher Types"
              onClick={(e) => props.setSelectedMenu(e, "UniVoucher Typests")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Warehouses",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Warehouses",
              })}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Warehouses"
              onClick={(e) => props.setSelectedMenu(e, "Warehouses")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Organizations")}
        className={clsx(classes.nested, "list-item", {
          "list-item-active": props.selectedMenu === "Organizations",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Organizations")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Organizations",
          })}
        >
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText
          primary="Organizations"
          onClick={(e) => props.setSelectedMenu(e, "Organizations")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      
      <ListItem
        button
        onClick={(e) => props.setSelectedMenu(e, "Users")}
        className={clsx(classes.nested, "list-item", {
          "list-item-active": props.selectedMenu === "Users",
        })}
      >
        <ListItemIcon
          onClick={(e) => props.setSelectedMenu(e, "Users")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Users",
          })}
        >
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Users"
          onClick={(e) => props.setSelectedMenu(e, "Users")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
      </ListItem>
      <ListItem
        button
        onClick={handleClickTrans}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Transactions",
        })}
      >
        <ListItemIcon
          // onClick={(e) => props.setSelectedMenu(e, "Transactions")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Transactions",
          })}
        >
          <SwapHorizIcon />
        </ListItemIcon>
        <ListItemText
          primary="Transactions"
          // onClick={(e) => props.setSelectedMenu(e, "Transactions")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
        {openTrans ? (
          <ExpandMore
            className={clsx("expend-icon", {
              "expend-icon-inactive": props.isDrawerMin,
            })}
          />
        ) : (
          <NavigateNextIcon
            className={clsx("shrink-icon", {
              "shrink-icon-inactive": props.isDrawerMin,
            })}
          />
        )}
      </ListItem>
      <Collapse in={openTrans} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Purchase Refund")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Purchase Refund",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Purchase Refund")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Purchase Refund",
              })}
            >
              <AssignmentReturnedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Purchase Refund"
              onClick={(e) => props.setSelectedMenu(e, "Purchase Refund")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Purchase Payment")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Purchase Payment",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Purchase Payment")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active":
                  props.selectedMenu === "Purchase Payment",
              })}
            >
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Purchase Payment"
              onClick={(e) => props.setSelectedMenu(e, "Purchase Payment")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Sales Recipt")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Sales Recipt",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Sales Recipt")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Sales Recipt",
              })}
            >
              <TocIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sales Recipt"
              onClick={(e) => props.setSelectedMenu(e, "Sales Recipt")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Sales Refund")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Sales Refund",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Sales Refund")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Sales Refund",
              })}
            >
              <RestorePageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sales Refund"
              onClick={(e) => props.setSelectedMenu(e, "Sales Refund")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleClickVoucher}
        className={clsx("list-item", {
          "list-item-active": props.selectedMenu === "Vouchers",
        })}
      >
        <ListItemIcon
          // onClick={(e) => props.setSelectedMenu(e, "Vouchers")}
          className={clsx("sidenav-icon", {
            "sidenav-icon-active": props.selectedMenu === "Vouchers",
          })}
        >
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText
          primary="Vouchers"
          // onClick={(e) => props.setSelectedMenu(e, "Vouchers")}
          className={clsx("listItemText", {
            "list-min": props.isDrawerMin,
          })}
        />
        {openVoucher ? (
          <ExpandMore
            className={clsx("expend-icon", {
              "expend-icon-inactive": props.isDrawerMin,
            })}
          />
        ) : (
          <NavigateNextIcon
            className={clsx("shrink-icon", {
              "shrink-icon-inactive": props.isDrawerMin,
            })}
          />
        )}
      </ListItem>
      <Collapse in={openVoucher} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Delivery Note")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Delivery Note",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Delivery Note")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Delivery Note",
              })}
            >
              <TocIcon />
            </ListItemIcon>
            <ListItemText
              primary="Delivery Note"
              onClick={(e) => props.setSelectedMenu(e, "Delivery Note")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Indent Order")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Indent Order",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Indent Order")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Indent Order",
              })}
            >
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText
              primary="Indent Order"
              onClick={(e) => props.setSelectedMenu(e, "Indent Order")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Purchase Invoice")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Purchase Invoice",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Purchase Invoice")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active":
                  props.selectedMenu === "Purchase Invoice",
              })}
            >
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText
              primary="Purchase Invoice"
              onClick={(e) => props.setSelectedMenu(e, "Purchase Invoice")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Purchase Order")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Purchase Order",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Purchase Order")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Purchase Order",
              })}
            >
              <DvrIcon />
            </ListItemIcon>
            <ListItemText
              primary="Purchase Order"
              onClick={(e) => props.setSelectedMenu(e, "Purchase Order")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Purchase Return")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Purchase Return",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Purchase Return")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Purchase Return",
              })}
            >
              <AssignmentReturnIcon />
            </ListItemIcon>
            <ListItemText
              primary="Purchase Return"
              onClick={(e) => props.setSelectedMenu(e, "Purchase Return")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Recipt Note")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Recipt Note",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Recipt Note")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Recipt Note",
              })}
            >
              <NoteIcon />
            </ListItemIcon>
            <ListItemText
              primary="Recipt Note"
              onClick={(e) => props.setSelectedMenu(e, "Recipt Note")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Sales Invoice")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Sales Invoice",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Sales Invoice")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Sales Invoice",
              })}
            >
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sales Invoice"
              onClick={(e) => props.setSelectedMenu(e, "Sales Invoice")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Sales Order")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Sales Order",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Sales Order")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Sales Order",
              })}
            >
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sales Order"
              onClick={(e) => props.setSelectedMenu(e, "Sales Order")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Sales Return")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Sales Return",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Sales Return")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Sales Return",
              })}
            >
              <UndoIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sales Return"
              onClick={(e) => props.setSelectedMenu(e, "Sales Return")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => props.setSelectedMenu(e, "Stock Transfer")}
            className={clsx(classes.nested, "list-item", {
              "list-item-active": props.selectedMenu === "Stock Transfer",
              "sub-list-item-active": !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              onClick={(e) => props.setSelectedMenu(e, "Stock Transfer")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Stock Transfer",
              })}
            >
              <TransformIcon />
            </ListItemIcon>
            <ListItemText
              primary="Stock Transfer"
              onClick={(e) => props.setSelectedMenu(e, "Stock Transfer")}
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
