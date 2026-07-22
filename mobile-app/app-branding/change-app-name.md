---
sidebar_position: 1
---

# How to Change the Application Name

Go to `lib/constants/settings.dart` and change the `appName` value.

![App name](../../static/images/app/appName.png)

## Android

Go to `android/app/src/main/AndroidManifest.xml` and change the `android:label` value.

![Change app name Android](../../static/images/app/changeAppNameAndroid.png)

## iOS

Go to `ios/Runner/Info.plist` and change the `CFBundleName` / `CFBundleDisplayName` value.

![Change app name iOS](../../static/images/app/changeAppNameIOS.png)
