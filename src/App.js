import React, { useState } from "react";
import street from "./images/street.jpg";
import Login from "./components/Login";
import Spinner from "./components/Spinner";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [spinner, setSpinner] = useState(false);

  return (
    <div>
      <div className="imgBackground">
        {/* eslint-disable-next-line */}
        <img src={street} atl="imgtreet" />
      </div>
      <Login setShowUsers={setShowUsers} setSpinner={setSpinner} />
      <Spinner spinner={spinner} />
    </div>
  );
}

export default App;
