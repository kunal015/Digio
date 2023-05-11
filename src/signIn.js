import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Routes from "./Routes";
import AadharOtp from "./aadharOtp";
import style from "./styles.css";
import history from "./history";

const SignIn = () => {
  const [email, setEmail] = useState("kunal@gmail.");
  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Opening Aadhar Page");
    history.push("/aadharOtp");
    return <AadharOtp />;
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
      document.getElementById("submitButton").disabled = false;
    } else {
      document.getElementById("submitButton").disabled = true;
    }
  };

  // handle the Google sign-in success
  const handleGoogleSuccess = (response) => {
    const id_token = response.tokenId;
    console.log(id_token);
    // handle the Google sign-in here
  };

  // handle the Google sign-in failure
  const handleGoogleFailure = (response) => {
    console.log("Google sign-in failed: ", response);
  };

  return (
    <div>
      <header className={style.App}>
        <div className={style.header}>
          <p>Sign Docuemnet Using Sanket@digio.in</p>
        </div>
      </header>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <GoogleLogin
          clientId="<your_google_client_id_here>"
          buttonText="Login with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
        <br />
        <br />
        <label>
          Proceed With Your Email address:
          <br />
          <input
            type="text"
            pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <p>By Continuing, I confirm to the terms and Conditionds of digio.in</p>
        <button type="submit" id="submitButton" disabled>
          Login
        </button>
      </form>
      <footer>
        <p>
          Powered By <a href="www.digio.in">www.digio.in</a>
        </p>
      </footer>
    </div>
  );
};

export default SignIn;
