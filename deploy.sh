#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
 cd dist

git init
git checkout -b main

git add -A
git commit -m "deploy" 

# if you are deploying to https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:juamaya/app-vite  main:gh-pages

cd -
