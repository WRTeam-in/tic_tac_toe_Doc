---
sidebar_position: 13
---

# How to Change Ad Type and Ad IDs

1. Select your ad type first.

   ![Change ad type](../static/images/app/changeAdType.png)

2. If you're using Google ads, follow the steps below (otherwise skip them):

   1. Go to `lib/Helper/Constants.dart` and update the ad IDs as shown below.

      ![Update ad IDs](../static/images/app/changeAdID.png)

   2. For Android, go to `android/app/src/main/AndroidManifest.xml` and update the ad IDs as shown below.

      ![Update Android ad IDs](../static/images/app/androidADID.png)

   3. For iOS, go to `ios/Runner/Info.plist` and update the ad IDs as shown below.

      ![Update iOS ad IDs](../static/images/app/iosADID.png)

   For more info, see the [google_mobile_ads platform setup guide](https://pub.dev/packages/google_mobile_ads#platform-specific-setup).

   4. To change the daily reward ad limit and reward price, go to `lib/Helper/Constants.dart` and update the values shown below. Do not change the variable names.

      ![Change ad limit and reward](../static/images/app/changeAdLimitandReward.png)
