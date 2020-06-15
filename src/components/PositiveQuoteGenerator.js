import React, { useState } from "react";
const PositiveQuotesGenerator = () => {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch("/.netlify/functions/getPositiveQuotes");
    const result = await response.json();
    console.log(result);
    setQuote(result.quotes[0]);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(/images/oxane-alexandroff-Z0ccygTNEfM-unsplash.jpg)",
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "#fff",
          fontSize: 80,
        }}
      >
        {quote}
      </span>
      <button
        style={{
          outline: "none",

          fontSize: 20,
          fontWeight: 800,
          color: "#fff",
          backgroundColor: "transparent",
          border: "5px solid",
          padding: "1em 1.5em",
          borderRadius: "2rem",
          transform: { translateX: "-50%" },
        }}
        onClick={getQuote}
      >
        View Quote
      </button>
    </div>
  );
};

export default PositiveQuotesGenerator;
