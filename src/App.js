import React, { useState, Fragment } from "react";
import street from "./images/street.jpg";
import Login from "./components/Login";
import MenuUsers from "./components/MenuUsers";
import Spinner from "./components/Spinner";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [spinner, setSpinner] = useState(false);

  // const [userData, setUserData] = useState({
  //   user: "",
  //   pass: "",
  // });

  return (
    <div>
      {showUsers ? (
        <MenuUsers />
      ) : (
        <Fragment>
          <div className="imgBackground">
            {/* eslint-disable-next-line */}
            <img src={street} atl="imgtreet" />
          </div>
          <Login setShowUsers={setShowUsers} setSpinner={setSpinner} />
          <Spinner spinner={spinner} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
