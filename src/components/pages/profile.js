import React, { useState } from "react";
import "../styles/profile.css";
import Navbar from "./navbar";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div id="profile-container">
        <div id="menubar">
          <div>Menu</div>
          <ul className="menu-options">
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#notifications">Notifications</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
        <div id="profile-data">
          <div>
            <h2>Profile Information</h2>
          </div>
          <div id="form-data">
            <div id="profileImage">
              <div id="profile-picture">
                <img src="https://via.placeholder.com/150" alt="Profile" />
              </div>

              <input type="file" id="profile-picture-upload" />
            </div>

            <div id="input-data">
              <div className="form-input">
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

             

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
