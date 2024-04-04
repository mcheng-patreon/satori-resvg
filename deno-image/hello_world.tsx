import React from "https://esm.sh/react@18.2.0";
import { createImage } from "./main.tsx";

for (let i = 0; i < 100; i++) {
  var template = (
    <div
    style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        width: "600px",
        height: "400px",
        backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        color: "#000",
      }}>
        <p>Frame: {i}</p>
        <div style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        width: "600px",
        height: "400px",
        backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
        color: "#000",
      }}>
        </div>
    </div>
  )

 createImage(template, i)
}