#!/usr/bin/env bash

cat  << EOF
android.useAndroidX=true
android.enableJetifier=true
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_STORE_PASSWORD=${MYAPP_UPLOAD_STORE_PASSWORD}
MYAPP_UPLOAD_KEY_ALIAS=${MYAPP_UPLOAD_KEY_ALIAS}
MYAPP_UPLOAD_KEY_PASSWORD=${MYAPP_UPLOAD_KEY_PASSWORD}
FLIPPER_VERSION=0.99.0
EOF