import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        color: "white",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "30px"
        }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "20px",
        textAlign: "center",
        width: "50%"
      }}>

        <h3>New Recipe</h3>
        <h1 style={{
          color: "#da7533",
          fontSize: "40px", 
          fontWeight: "bold"
        }}>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn" style={{
            backgroundColor: "#588a8b",
            border: "0px",
            padding: "10px",
            color: "white"
          }}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
