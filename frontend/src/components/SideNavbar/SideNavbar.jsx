import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  EmojiObjectsOutlined as EmojiObjectsIcon,
  NotificationsNone as NotificationsNoneIcon,
  Create as CreateIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons";
import NestedList from '../menu_drawer/menu_drawer.jsx';
import clsx from "clsx";
import history from "../../History.js";
import "./sideNavbar.scss";

export default function SideNavBar(props) {
  const setSelectedMenu = (e, currentMenu) => {
    e.preventDefault();
    props.setSelectedMenu(currentMenu);
    // history.push("/dashBoard/"+currentMenu);
  };
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx("sideNav", {
          "sideNav-inactive": props.isDrawerMin,
          "sideNav-active": !props.isDrawerMin,
        })}
      >
        {/* <List className="sideNav-list"> */}
          {/* <ListItem
            button
            onClick={(e) => selectedMenu(e, "Notes")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Notes" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
             onClick={(e) => selectedMenu(e, "Notes")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Notes",
              })}
            >
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText
             onClick={(e) => selectedMenu(e, "Notes")}
              primary="Notes"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem> */}
          <NestedList setSelectedMenu={setSelectedMenu} isDrawerMin={props.isDrawerMin} selectedMenu={props.selectedMenu} />
          
        {/* </List> */}
      </Drawer>
    </>
  );
}