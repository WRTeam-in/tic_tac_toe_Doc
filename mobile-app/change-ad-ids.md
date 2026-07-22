---
sidebar_position: 13
---

# How to Change Ad Type and Ad IDs

Everything ad-related is centralized in `lib/constants/ad_config.dart`:

```dart
class AdConfig {
  /// Master switch. `false` disables every ad (interstitial + rewarded) app-wide.
  static const bool adsEnabled = true;

  /// `true` shows Google AdMob rewarded ads, `false` falls back to Unity Ads.
  static const bool wantGoogleAd = true;

  /// AdMob rewarded ad unit id — ships with Google's public test ID, replace before release.
  static const String rewardedAdID = 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX';

  /// AdMob interstitial ad unit id — ships with Google's public test ID, replace before release.
  static const String interstitialAdID = 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX';

  /// Unity Ads game id — ships with Unity's public test ID, replace before release.
  static final String unityGameId = Platform.isAndroid ? 'XXXXXXX' : 'XXXXXXX';

  // unityRewardedPlacementId / unityInterstitialPlacementId also live here.

  /// Max rewarded-ad coin claims allowed per calendar day.
  static const int adLimit = 5;

  /// Coins credited per rewarded-ad watch.
  static const int adRewardAmount = 50;
}
```

<!-- TODO: add code screenshot — lib/constants/ad_config.dart — full `AdConfig` class -->

1. **Choose your ad network** — set `wantGoogleAd` to `true` for Google AdMob, or `false` to use Unity Ads instead.
2. **Google AdMob** — replace `rewardedAdID` and `interstitialAdID` with your real ad unit IDs from the [AdMob console](https://admob.google.com/home/). Format: `ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX` — your publisher ID, then the ad unit number. For account setup, app registration, and creating ad units step by step, see the [Google AdMob Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/advertisement/google-admob/).
3. **Unity Ads** — replace `unityGameId`, and the placement IDs returned by `unityRewardedPlacementId` / `unityInterstitialPlacementId`, with your own from the [Unity Ads dashboard](https://dashboard.unity3d.com/).
4. **Daily reward limit / reward amount** — change `adLimit` (max rewarded-ad claims per day) and `adRewardAmount` (coins per watch).

## App-level Ad IDs

Separately from the ad unit IDs above, both platforms also need your AdMob **App ID** (not an ad unit ID) registered at the platform level:

- **Android** — `android/app/src/main/AndroidManifest.xml`, under the `com.google.android.gms.ads.APPLICATION_ID` meta-data tag.
- **iOS** — `ios/Runner/Info.plist`, under the `GADApplicationIdentifier` key.

The App ID uses a `~` (not `/`) and looks like `ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX`. Find it in the [AdMob console](https://admob.google.com/home/) under **Apps → your app → App settings**, or in the [Google AdMob Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/advertisement/google-admob/).

For full platform setup (manifest permissions, `Info.plist` entries, SDK init), see the [google_mobile_ads platform setup guide](https://pub.dev/packages/google_mobile_ads#platform-specific-setup).

<!-- TODO: add screenshot — ad-config-code.png (AdConfig class in the IDE) and ad-app-id-manifest.png (APPLICATION_ID in AndroidManifest.xml / GADApplicationIdentifier in Info.plist) -->
