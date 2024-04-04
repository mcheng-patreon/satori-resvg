#!/bin/bash

node hello_world.mjs
ffmpeg -framerate 30 -y -pattern_type glob -i '*.png' -c:v libx264 -pix_fmt yuv420p out.mp4

# print num of png files
find ./ -iname \*.png | wc -l
rm *.png