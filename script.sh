!/usr/bin/bash

# update the repo
git pull origin main

# install the dependencies if package.json has been modified
if git diff --name-only HEAD^ HEAD | grep -q package.json; then
  npm install
fi

# build the app
npm run build

# copy the build to the server folder
rsync -a build/ server/build/ --remove-source-files
rmdir build