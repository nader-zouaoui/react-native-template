#!/bin/bash
#
# Exports latest build number from the git tag into a variable later used in pipeline job
#
# refresh all tags from remote 
git fetch --tags >/dev/null

# get latest tag - we search for numeric tags only sorted by creation date
LATEST_TAG=$(git for-each-ref --sort=authordate --format '%(refname)' 'refs/tags/*' | { grep 'refs\/tags\/[0-9][0-9]*' || true; }| tail -1)

NUMERIC_TAG=${LATEST_TAG//[^0-9]/}

# # if tag not found, the default build number will be 1
CI_LATEST_BUILD_NUMBER=${NUMERIC_TAG:-1}

echo "Got version number ${CI_LATEST_BUILD_NUMBER}"
# export for use in CI stage 
export CI_LATEST_BUILD_NUMBER



