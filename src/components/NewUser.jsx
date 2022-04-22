import "./NewUser.css";

function NewUser() {
  return (
    <div className="NewUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItems">
          <label> Username:</label>
          <input type="text" placeholder="Snow " />
        </div>
        <div className="newUserItems">
          <label> Full Name:</label>
          <input type="text" placeholder="Mba Son " />
        </div>
        <div className="newUserItems">
          <label> Email:</label>
          <input type="email" placeholder="mbajames346@gmail.com" />
        </div>
        <div className="newUserItems">
          <label> Password:</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="newUserItems">
          <label> Phone:</label>
          <input type="text" placeholder="Enter Phone Number " />
        </div>
        <div className="newUserItems">
          <label> Address:</label>
          <input type="text" placeholder="Enter Address..." />
        </div>
        <div className="newUserItems">
          <label> Gender:</label>
          <div className="newUserContainer">
            <input type="radio" name="gender" id="male" value="malw" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="male">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label> Active</label>
          <select className="newuserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserButton">Create</div>
      </form>
    </div>
  );
}

export default NewUser;
