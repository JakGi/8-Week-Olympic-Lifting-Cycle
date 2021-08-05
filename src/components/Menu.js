import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as  Route, Switch, Link } from "react-router-dom";
import Week1 from "./Week1";
import Week2 from "./Week2";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Show trening
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/Week1">
          <MenuItem onClick={handleClose}>Week-1</MenuItem>
        </Link>
        <Link to="/Week2">
          <MenuItem onClick={handleClose}>Week-2</MenuItem>
        </Link>

      </Menu>

      <Switch>
        <Route path="/Week1">
          <Week1 />
        </Route>
        <Route path="/Week2">
          <Week2 />
        </Route>
      </Switch>
    </div>
  );
}
