import React, { useState, useEffect ,useRef  } from "react";
import "../styles/profile.css";
import Navbar from "./navbar";
import closeButton from "../images/close.png"; 
import hamburgerIcon from "../images/Hamburger_icon.svg.png"; 
import userDefault from "../images/user.jpg"; 
const ProfilePage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    streetAddress: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
    profileImage: "" // Add state for profile image
  });

  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(""); // State to store image preview
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // Fetch user profile data and populate the form
    const fetchProfileData = async () => {
      // Replace this with an API call to fetch profile data
      const profileData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        password: "password123",
        confirmPassword: "password123",
        streetAddress: "123 Main St",
        city: "New York",
        zipcode: "10001",
        state: "NY",
        country: "USA",
        profileImage: userDefault // Default profile image
      };
      setFormData(profileData);
      setImagePreview(profileData.profileImage); // Set initial image preview
    };

    fetchProfileData();
  }, []);

  
  const validateForm = () => {
    let errors = {};
    let firstErrorField = null;

    if (!formData.username) {
      errors.username = "Username is required";
      firstErrorField = firstErrorField || "username";
    }
    if (!formData.email) {
      errors.email = "Email is required";
      firstErrorField = firstErrorField || "email";
    }
    if (!formData.password) {
      errors.password = "Password is required";
      firstErrorField = firstErrorField || "password";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
      firstErrorField = firstErrorField || "confirmPassword";
    }
    if (!formData.streetAddress) {
      errors.streetAddress = "Street address is required";
      firstErrorField = firstErrorField || "streetAddress";
    }
    if (!formData.city) {
      errors.city = "City is required";
      firstErrorField = firstErrorField || "city";
    }
    if (!formData.zipcode) {
      errors.zipcode = "Zipcode is required";
      firstErrorField = firstErrorField || "zipcode";
    }
    if (!formData.state) {
      errors.state = "State is required";
      firstErrorField = firstErrorField || "state";
    }
    if (!formData.country) {
      errors.country = "Country is required";
      firstErrorField = firstErrorField || "country";
    }

    setErrors(errors);

    if (firstErrorField) {
      document.getElementById(firstErrorField).focus(); // Autofocus on the first error field
    }

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Update the image preview
        setFormData({ ...formData, profileImage: reader.result }); // Update formData
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form data:", formData);
      setIsEditing(false); // Disable editing after saving
    }
  };

  const handleDeleteProfile = () => {
    // Handle profile deletion logic here
    console.log("Profile deleted");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state

    if (menuRef.current) {
      if (isMenuOpen) {
        // If menu is open, it means we are closing it
        menuRef.current.style.width = "0"; // Change width when closing
      } else {
        // If menu is closed, it means we are opening it
        menuRef.current.style.width = "250px"; // Adjust width as needed
      }
    }
  };
  return (
    <>
      <Navbar />
      <div id="profile-container">
      <div id="menubar" className={isMenuOpen ? "open" : "close"}>
          <div id="close-div">
            <div>
              {!isMenuOpen && (
                <button onClick={toggleMenu}>
                  <img src={hamburgerIcon} alt="Open menu" />
                </button>
              )}
            </div>
            <div>
              {isMenuOpen && (
                <button onClick={toggleMenu}>
                  <img src={closeButton} alt="Close menu" />
                </button>
              )}
            </div>
          </div>
          <ul className="menu-options">
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div id="profile-data">
          <div>
            <h2>Profile Information</h2>
          </div>
          <div id="form-data">
            <div id="profileImage">
              <div id="profile-picture">
                <img src={imagePreview} alt="Profile" />
              </div>
              {isEditing && (
                <input
                  type="file"
                  id="profile-picture-upload"
                  onChange={handleImageChange}
                />
              )}
            </div>

            <form id="input-data" onSubmit={handleSubmit}>
              <div className="form-input">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      disabled={!isEditing}
                    />
                    <label htmlFor="username">Username</label>
                    {errors.username && <div className="error">{errors.username}</div>}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      disabled={!isEditing}
                    />
                    <label htmlFor="email">Email</label>
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      disabled={!isEditing}
                    />
                    <label htmlFor="password">Password</label>
                    {errors.password && <div className="error">{errors.password}</div>}
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      disabled={!isEditing}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    {errors.confirmPassword && (
                      <div className="error">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      placeholder="Enter your street address"
                      disabled={!isEditing}
                    />
                    <label htmlFor="streetAddress">Street Address</label>
                    {errors.streetAddress && (
                      <div className="error">{errors.streetAddress}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      disabled={!isEditing}
                    />
                    <label htmlFor="city">City</label>
                    {errors.city && <div className="error">{errors.city}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      placeholder="Enter your zipcode"
                      disabled={!isEditing}
                    />
                    <label htmlFor="zipcode">Zipcode</label>
                    {errors.zipcode && <div className="error">{errors.zipcode}</div>}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      disabled={!isEditing}
                    />
                    <label htmlFor="state">State</label>
                    {errors.state && <div className="error">{errors.state}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      disabled={!isEditing}
                    />
                    <label htmlFor="country">Country</label>
                    {errors.country && <div className="error">{errors.country}</div>}
                  </div>
                </div>
              </div>

              <div id="profile-actions">
                {!isEditing ? (
                  <>
                    <button type="button" onClick={() => setIsEditing(true)} className="update-button">
                      Update Profile
                    </button>
                    <button type="button" onClick={handleDeleteProfile} className="delete-button">
                      Delete Profile
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" onClick={() => setIsEditing(false)} className="cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="save-button">
                      Save Profile
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;