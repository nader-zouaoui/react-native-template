#!/usr/bin/env bash

BUILD_GRADLE_FILE=${1:-"./android/app/build.gradle"}

echo "Build number : ${BUILD_NUMBER}"
echo "Version : ${VERSION}"

if [ "$(uname)" == "Darwin" ]; then
  sed -i '' "/^[[:blank:]]*versionName/s/versionName .*/versionName \"$VERSION\"/g" $BUILD_GRADLE_FILE
  sed -i '' "/^[[:blank:]]*versionCode/s/versionCode .*/versionCode $BUILD_NUMBER/g" $BUILD_GRADLE_FILE
else
  sed -i "/^[[:blank:]]*versionName/s/versionName .*/versionName \"$VERSION\"/g" $BUILD_GRADLE_FILE
  sed -i "/^[[:blank:]]*versionCode/s/versionCode .*/versionCode $BUILD_NUMBER/g" $BUILD_GRADLE_FILE
fi