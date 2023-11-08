import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="navbar">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="yolo"
          />
        </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Log in to Spotify</h1>
          </div>

          <a href={loginUrl}>Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
