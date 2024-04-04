import React from "https://esm.sh/react@18.2.0";
import { FormatNumberLength, createImage } from "./main.tsx";


var delayed_frames = [2, 8, 14, 20, 26, 27]
for (let i = 0; i < 1000; i++) {
  let frame_idx = FormatNumberLength(Math.floor(i / 4) % 28, 2)
  var template = (
    <div
    style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
        width: "600px",
        height: "400px",
        color: "#000",
      }}>
        <p>Frame: {i}</p>
        <div style={{
        display: "flex",
        left: `${Math.floor(i % 600)}px`,
      }}>
        <img src={`https://github.com/mcheng-patreon/satori-resvg/blob/main/running/frame_${frame_idx}_delay-0.0${delayed_frames.includes(parseInt(frame_idx)) ? "5" : "4"}s.gif?raw=true`} ></img>
        </div>
    </div>
  )

  createImage(template, i)
//  console.log(`Frame ${i} created`)

}
