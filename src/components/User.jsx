import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./User.css";

function User() {
  return (
    <div className="user">
      <div className="useTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="useAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="UserShowTop">
            <img src="" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="showUserName">Mba Snow</span>
              <span className="showUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="showTitle">Account Details</span>
            <div className="useShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Annabeck 99</span>
            </div>
            <div className="useShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Apr 29, 1996</span>
            </div>
            <span className="showTitle">Account Details</span>
            <div className="useShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+234 9058 278 576</span>
            </div>
            <div className="useShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">mbajames346@gmail.com</span>
            </div>
            <div className="useShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="useUpdateItems">
                <label>Username:</label>
                <input
                  type="text"
                  placeholder="Mba Snow"
                  className="UpdateInput"
                />
              </div>
              <div className="useUpdateItems">
                <label>Full Name:</label>
                <input
                  type="text"
                  placeholder="Mba Snow"
                  className="UpdateInput"
                />
              </div>
              <div className="useUpdateItems">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="mbajames346@gmail.com"
                  className="UpdateInput"
                />
              </div>
              <div className="useUpdateItems">
                <label>Phone Number:</label>
                <input
                  type="text"
                  placeholder="+234 0958 278675"
                  className="UpdateInput"
                />
              </div>
              <div className="useUpdateItems">
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="New york || USA"
                  className="UpdateInput"
                />
              </div>
            </div>
            <div className="updateItemRight">
              <div className="userUpdateUpload">
                <img src="" alt="" className="userUpdateItemRightImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="useUpdateButton">Update</button>
``            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
