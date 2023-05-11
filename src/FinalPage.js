import React, { useState, useEffect } from "react";

const FinalPage = () => {
  const [isSigning, setIsSigning] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSigning(false);
    }, 3000);
  }, []);

  return (
    <div style={{ opacity: isSigning ? 0.5 : 1 }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          backgroundColor: "white",
          zIndex: "999",
          textAlign: "center",
          display: isSigning ? "block" : "none"
        }}
      >
        <h3>Signing...</h3>
        <p> Mutual Non-Disclousre Agreement</p>
        <h1>Welcome to my page</h1>
        <p>This page is now visible after signing.</p>
      </div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          backgroundColor: "white",
          zIndex: "999",
          textAlign: "center",
          display: !isSigning ? "block" : "none"
        }}
      >
        <p>Aadhar Verified Successfully</p>
        <h1>Welcome to my page</h1>
        <p>This page is now visible after signing.</p>
      </div>
    </div>
  );
};

export default FinalPage;
