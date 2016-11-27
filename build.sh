#!/bin/bash
echo 'running js build'
uglifyjs -c -m -o 'build.js' -- scripts/script.js
echo 'running css build'
cat styles/reset.css styles/style.css styles/large.css styles/animations.css > temp.css && postcss --use autoprefixer temp.css --replace && cssmin temp.css > build.css && rm temp.css
