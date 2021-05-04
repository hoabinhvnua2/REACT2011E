import React, { useState } from "react";
import clsx from "clsx";
import { withStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./style";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SildeBar from "./SildeBar";
import { authService } from '../services/auth-service';
import {useAuth} from '../redux/hooks/Auth';
import { history } from '../helps/history'

const StyledBadge = withStyles((theme) => ({
  badge: {
    top: 10,
    padding: "0 4px",
  },
}))(Badge);

export default function Layout() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { actions } = useAuth()

  const handleDrawerToggle = () => {
    setOpen(open ? false : true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    actions.logout();
    authService.logout();
    history.push('sign-in')
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.noWrap}>
            Mini variant drawer
          </Typography>
          <div className={classes.customAvata}>
            <StyledBadge
              badgeContent={4}
              color="secondary"
              className={classes.alert}
            >
              <NotificationsIcon />
            </StyledBadge>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <SildeBar open={open}/>
    </div>
  );
}
