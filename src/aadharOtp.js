import React, { useState } from "react";

const AadharOtp = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [isAadhaarValid, setIsAadhaarValid] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);

  const handleAadhaarNumberChange = (event) => {
    const { value } = event.target;
    setAadhaarNumber(value);
  };

  const handleOtpChange = (event) => {
    const { value } = event.target;
    setOtp(value);
  };

  const handleCheckbox = (event) => {
    setCheckBox(!checkbox);
  };
  const handleVerifyAadhaar = () => {
    // Perform Aadhaar verification logic here
    // For simplicity, let's assume all 12-digit numbers are valid Aadhaar numbers
    if (/^\d{12}$/.test(aadhaarNumber)) {
      if (checkbox === true) {
        setIsAadhaarValid(true);
      } else {
        alert("Please Select The checkbox");
      }
    } else {
      setIsAadhaarValid(false);
      alert("Invalid Aadhar Please enter a 12 digit Aadhar Number");
    }
  };

  const handleVerifyOtp = () => {
    // Perform OTP verification logic here
    // For simplicity, let's assume all 6-digit numbers are valid OTPs
    if (otp === "123456") {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
      alert("Invalid Otp");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Proceed to next page if Aadhaar and OTP are valid
    if (isAadhaarValid && isOtpValid) {
      // Navigate to next page here
    }
  };

  return (
    <>
      <header>
        <h2> Register Aadhar </h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Aadhaar Number:
          <input
            type="text"
            value={aadhaarNumber}
            onChange={handleAadhaarNumberChange}
          />
        </label>
        &nbsp;
        <button type="button" onClick={handleVerifyAadhaar}>
          Verify Aadhaar
        </button>
        <br />
        <p>
          <input type="checkbox" value={checkbox} onClick={handleCheckbox} />I
          Agree to eSign this <u> Kyc Document</u> To get Started{" "}
        </p>
        {isAadhaarValid && (
          <div>
            <label>
              OTP:
              <input type="text" value={otp} onChange={handleOtpChange} />
            </label>{" "}
            &nbsp;
            <button type="button" onClick={handleVerifyOtp}>
              Submit
            </button>
            {isOtpValid && (
              <div>
                <p>Otp Verified Successfully</p>
                <button type="submit">Proceed</button>
              </div>
            )}
          </div>
        )}
      </form>
    </>
  );
};

export default AadharOtp;
