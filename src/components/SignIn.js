import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import Draggable from "react-draggable";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <Draggable>
        <div className="form-container  d-flex flex-column align-items-center">
          <h1 className="text-center text-white mt-5">
            {" "}
            Welcome to React ChatBox
          </h1>
          <span className="text-white text-center p-3">
            Start chatting and stay connected with React ChatBox.
          </span>

          <div className="sigin-button mt-5" onClick={signInWithGoogle}>
            Sign In With Google{" "}
            <img
              src="/google-icon.png"
              className="google-icon mx-2"
              alt="Google Icon"
            />
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default SignIn;
