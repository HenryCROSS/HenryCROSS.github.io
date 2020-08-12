#!/bin/bash

for jpg in $(ls $1 | grep "\.jpg$")
do
    jpgNoExt=${jpg%.*}
    ffmpeg -i $jpgNoExt.jpg $jpgNoExt.webp
done
