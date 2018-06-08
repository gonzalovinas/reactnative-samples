#!/bin/sh
react-native bundle --platform android --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
cd android && ./gradlew assembleRelease
cd ..

