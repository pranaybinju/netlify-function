import React, { useState, useEffect } from "react";
const PositiveQuotesGenerator = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = async () => {
    const response = await fetch("/.netlify/functions/getPositiveQuotes");
    const result = await response.json();
    console.log(result);
    setQuote(result.quote);
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
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: 50,
          textAlign: "center",
          padding: 40,
          height: "40%",
        }}
      >
        {quote}
      </div>
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
