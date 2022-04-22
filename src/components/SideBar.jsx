import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <Link to="/" className="Link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcons" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/products" className="Link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcons" />
                Products
              </li>
            </Link>
            <Link to="/users" className="Link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcons" />
                Users
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
