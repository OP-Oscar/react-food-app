import React from "react";


const DetailScreenImg= ({image, title}) => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)),
          url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          height: "400px",
          width: "100%",
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

        <h1 style={{
          color: "#da7533",
          fontSize: "40px", 
          fontWeight: "bold"
        }}>{title}</h1>
      </div>
    </div>
  );
};

export default DetailScreenImg;
