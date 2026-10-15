import React, { useState } from "react";

function Registration() {
  const { user, setUser } = useState();
  const { pwd, setPwd } = useState();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center row row-cols">
      <h2 className="bg-warning text-center mt-3 ">Registration</h2>
      <form className="d-flex flex-column justify-content-center align-items-center gap-3 g-3">
        <input
          type="text"
          name={"user"}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter username"
        />
        <input
          type="password"
          name={"pwd"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
