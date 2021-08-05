import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import Week4 from "./Week4";
import Week5 from "./Week5";
import Week6 from "./Week6";
import Week7 from "./Week7";
import Week8 from "./Week8";

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
        <Link to="/Week3">
          <MenuItem onClick={handleClose}>Week-3</MenuItem>
        </Link>
        <Link to="/Week4">
          <MenuItem onClick={handleClose}>Week-4</MenuItem>
        </Link>
        <Link to="/Week5">
          <MenuItem onClick={handleClose}>Week-5</MenuItem>
        </Link>
        <Link to="/Week6">
          <MenuItem onClick={handleClose}>Week-6</MenuItem>
        </Link>
        <Link to="/Week7">
          <MenuItem onClick={handleClose}>Week-7</MenuItem>
        </Link>
        <Link to="/Week8">
          <MenuItem onClick={handleClose}>Week-8</MenuItem>
        </Link>
      </Menu>

      <Switch>
        <Route path="/Week1">
          <Week1 />
        </Route>
        <Route path="/Week2">
          <Week2 />
        </Route>
        <Route path="/Week3">
          <Week3 />
        </Route>
        <Route path="/Week4">
          <Week4 />
        </Route>
        <Route path="/Week5">
          <Week5 />
        </Route>
        <Route path="/Week6">
          <Week6 />
        </Route>
        <Route path="/Week7">
          <Week7 />
        </Route>
        <Route path="/Week8">
          <Week8 />
        </Route>
      </Switch>
    </div>
  );
}
