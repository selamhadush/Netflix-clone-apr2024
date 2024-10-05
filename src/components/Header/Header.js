import React from "react";
import "./header.css";
import Netflogo from "../../assets/images/logo.jpg";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflogo} alt="Netflix Logo" width="100" />
            </li>
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movless</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SavedSearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
