import fetch from "node-fetch";
globalThis.fetch = fetch;
import { readFile, writeFile } from "node:fs/promises";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

export function FormatNumberLength(num, length) {
  var r = "" + num;
  while (r.length < length) {
      r = "0" + r;
  }
  return r;
}

export default async function createImage(template, frame){
  // convert html to svg
  const svg = await satori(template, {
    width: 600,
    height: 400,
    fonts: [
      {
        name: "VictorMono",
        data: await readFile("../fonts/VictorMono-Bold.ttf"),
        weight: 700,
        style: "normal",
      },
    ],
  });

  // render png
  const resvg = new Resvg(svg, {
    background: "rgba(238, 235, 230, .9)",
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await writeFile(`frame${FormatNumberLength(frame, 5)}.png`, pngBuffer);

}
