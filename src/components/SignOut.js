import React from "react";
import { auth } from "../firebase";

function SignOut({ userName }) {
  return (
    <>
      <div className="signout-container d-flex justify-content-between align-items-center">
        <h5 className=" px-4">Hello, {userName}</h5>
        <button class="button px-4 mx-4" onClick={() => auth.signOut()}>
          Sign Out
          <div class="hoverEffect">
            <div></div>
          </div>
        </button>
      </div>
    </>
  );
}

export default SignOut;
