#!/bin/bash

deno run --unstable --allow-env --allow-ffi --allow-net --allow-read --allow-write ./hello_world.tsx

ffmpeg -framerate 30 -pattern_type glob -i '*.png' -c:v libx264 -pix_fmt yuv420p out.mp4
rm *.png