import React, { useContext, useEffect, useRef, useState } from "react";
import AvatarReact from "react-avatar";
import "./Avatar.css";
import { useHistory } from "react-router-dom";
import { firebaseContext,authContext } from "../../store/firebaseContext";

function Avatar() {
  const [open, setOpen] = useState();
  const history = useHistory()
  const {Firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)

  function handleSignout() {
    Firebase.auth().signOut();
    history.push("/login")
  }

  return (
    <div className="avatar">
      <button
        onClick={() => setOpen(!open)}
        className="avatar-button"
        type="button"
      >
        <AvatarReact size="50" round={true} name="Deependra" />
        &#x25BC;
      </button>
      <div className={`avatar-dropdown ${open ? "active" : "inactive"}`}>
        <div className="avatar-dropdown-details">
          <div className="avatar-profile">
            <AvatarReact size="50" round={true} name="Deependra" />
            
          </div>
          <div className="avatar-profile-details">
            <p>Hello,</p>
            <h5>Deependra</h5>
            <p>View and Edit Profile</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="dropdown-items" onClick={()=>history.push("/create")}>Start Selling</div>
        <div className="dropdown-items">Favorites</div>
        <div className="dropdown-items" onClick={()=>{handleSignout()}}>Logout</div>
      </div>
    </div>
  );
}

export default Avatar;
