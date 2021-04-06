import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from '../constants/routes';

const SildeBar = ({ open }) => {
  const classes = useStyles();
  return (
    <Router>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/user">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
          </Link>
          <Link to="/task">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Task" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        {
          routes.map((route, index) => (
            <Route 
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              children={route.component}
              
            />
          ))
        }
      </Switch>
      </main>
    </Router>
  );
};

SildeBar.propTypes = {};

export default SildeBar;
