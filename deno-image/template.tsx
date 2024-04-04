import React from "https://esm.sh/react@18.2.0";

export const template = (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        width: "600px",
        height: "400px",
        backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        color: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1 0",
          flexFlow: "row nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            border: "8px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
          }}
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10175554/673ebad95d8a4fc5a354bf9094854b8a/eyJ3IjoyMDB9/1.jpeg?token-time=2145916800&token-hash=obEwx9MqzJrFgQ49A1_niVPo9WgoFaePeLxO3KHeyB4%3D"
          alt="animals"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "6px",
          padding: "12px",
          borderRadius: "4px",
          background: "rgba(255, 255, 255, 0.2)",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  );
  