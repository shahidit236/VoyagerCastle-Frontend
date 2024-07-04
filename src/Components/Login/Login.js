import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Context/firebase.config";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email and password are filled
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      setIsLoading(true);

      // Attempt to sign in
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Check if the user is successfully authenticated
      if (user) {
        // Redirect to the home page or any other page upon successful login
        navigate("/home");
      } else {
        // Show an error toast if something unexpected happens
        toast.error("Unexpected error. Please try again.");
      }
    } catch (error) {
      console.error(error);
      // Show an error toast for invalid email or password
      toast.error("Invalid email or password. Please try again.");
    } finally {
      // Reset loading state to false after the authentication attempt
      setIsLoading(false);
    }
  };

  return (
    // <!----------------------- Main Container -------------------------->

    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      {/* <!----------------------- Login Container --------------------------> */}

      <div class="row border rounded-5 p-3 bg-white shadow box-area">
        {/* <!--------------------------- Left Box -----------------------------> */}

        <div
          class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#103CBE" }}
        >
          <div class="featured-image mb-3">
            <img
              src="assets/img/vc-logo.png"
              class="img-fluid"
              style={{ width: "250px" }}
            />
          </div>
          <p
            class="text-white fs-2"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontWeight: 600,
            }}
          >
            Be Verified
          </p>
          <small
            class="text-white text-wrap text-center"
            style={{
              width: "17rem",
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            Join experienced Designers on this platform.
          </small>
        </div>

        {/* <!-------------------- ------ Right Box ----------------------------> */}

        <div class="col-md-6 right-box">
          <div class="row align-items-center">
            <div class="header-text mb-4">
              <h2>Hello,Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
              />
            </div>
            <div class="input-group mb-1">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control form-control-lg bg-light fs-6"
                placeholder="Password"
              />
            </div>
            <div class="input-group mb-5 d-flex justify-content-between">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="formCheck"
                />
                <label for="formCheck" class="form-check-label text-secondary">
                  <small>Remember Me</small>
                </label>
              </div>
              <div class="forgot">
                <small>
                  <a href="#">Forgot Password?</a>
                </small>
              </div>
            </div>
            <div class="input-group mb-3">
            <button
                className="btn btn-lg w-100 fs-6"
                style={{ backgroundColor: "#3CB371" }}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div class="row">
              <small>
                Don't have account? <a href="#">Sign Up</a>
              </small>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
