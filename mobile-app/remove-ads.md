---
sidebar_position: 14
---

# How to Remove Ads

## Turn ads off in the app

Set the master switch in `lib/constants/ad_config.dart` to `false`:

```dart
class AdConfig {
  /// Master switch. `false` disables every ad (interstitial + rewarded) app-wide:
  /// no SDK init, no ad loads, and the shop's "watch ad" tile is hidden.
  static const bool adsEnabled = false;
  // ...
}
```

This disables both interstitial and rewarded ads everywhere, and hides the "watch ad for coins" tile on the Shop screen.

## Android: remove the AD_ID permission

If you're not showing ads at all, also strip the advertising-ID permission that the ad SDKs otherwise merge into your manifest:

1. Go to `android/app/src/main/AndroidManifest.xml`.
2. Add the permission below:

   ```xml
   <uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove" />
   ```

3. Make sure this namespace is declared on the `<manifest>` tag (add it if it isn't already there):

   ```xml
   xmlns:tools="http://schemas.android.com/tools"
   ```

