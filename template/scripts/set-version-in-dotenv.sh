#!/usr/bin/env bash
#
# Exports latest semantic version from package.json and  
# latest build number from git tag and replaces in .env
# for later build process
#

ENV_FILE=${1:-".env"}

export VERSION=$(yarn run -s package-version)

git fetch --tags >/dev/null
LATEST_TAG=$(git for-each-ref --sort=authordate --format '%(refname)' 'refs/tags/*' | { grep 'refs\/tags\/[0-9][0-9]*' || true; } | tail -1)

echo "Latest tag : ${LATEST_TAG}"

NUMERIC_TAG=${LATEST_TAG//[^0-9]/}

echo "Numeric tag : ${NUMERIC_TAG}"

export BUILD_NUMBER=${NUMERIC_TAG:-1}


if [ "$(uname)" == "Darwin" ]; then
  sed -i '' "s/VERSION=.*/VERSION=$VERSION/g" $ENV_FILE
  sed -i '' "s/BUILD_NUMBER=.*/BUILD_NUMBER=$BUILD_NUMBER/g" $ENV_FILE
else
  sed -i "s/VERSION=.*/VERSION=$VERSION/g" $ENV_FILE
  sed -i "s/BUILD_NUMBER=.*/BUILD_NUMBER=$BUILD_NUMBER/g" $ENV_FILE
fi