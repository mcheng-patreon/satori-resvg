
import satori, { init } from "npm:satori@0.0.44/wasm";
import initYoga from "npm:yoga-wasm-web@0.2.0";
import { Resvg } from "npm:@resvg/resvg-js@2.2.0";
import cacheDir from "https://deno.land/x/cache_dir@0.2.0/mod.ts";

const wasm = await Deno.readFile(
  `${cacheDir()}/deno/npm/registry.npmjs.org/yoga-wasm-web/0.2.0/dist/yoga.wasm`,
);
const yoga =
  await (initYoga as unknown as (wasm: Uint8Array) => Promise<unknown>)(wasm);
init(yoga);

function FormatNumberLength(num, length) {
  var r = "" + num;
  while (r.length < length) {
      r = "0" + r;
  }
  return r;
}

export async function createImage(template: any, frame: number) {
  // convert html to svg
  const svg = await satori(
    template,
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: "VictorMono",
          data: await Deno.readFile("../fonts/VictorMono-Bold.ttf"),
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  // render png
  const resvg = new Resvg(svg, {
    background: "rgba(238, 235, 230, .9)",
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await Deno.writeFile(`frame${FormatNumberLength(frame, 5)}.png`, pngBuffer);
  
  // ffi block, need to force exit
  Deno.exit(0);
}