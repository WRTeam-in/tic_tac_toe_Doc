# Frequently Asked Questions (FAQs)

Popular questions about Tic Tac Toe to help you get started!

## I get a build version error when archiving the iOS app

If you get a build version error when archiving the app after testing, change the following in `ios/Runner/Info.plist`:

**Before:**
```xml
<key>CFBundleShortVersionString</key>
<string>$(FLUTTER_BUILD_NAME)</string>
<key>CFBundleVersion</key>
<string>$(FLUTTER_BUILD_NUMBER)</string>
```

**After:**
```xml
<key>CFBundleShortVersionString</key>
<string>$(MARKETING_VERSION)</string>
<key>CFBundleVersion</key>
<string>$(CURRENT_PROJECT_VERSION)</string>
```

## Do I need a paid Firebase plan?

Online multiplayer relies on the Firebase Realtime Database, so you'll need the **Firebase Blaze (Pay-as-you-go)** plan once your usage grows past the free Spark plan's limits. See [Tech Stack & Requirements](/features/tech-stack-and-requirements) for details.

## Google Sign-In fails with an ApiException

This is almost always a missing SHA-1 fingerprint or an unconfigured OAuth consent screen. See [Firebase Authentication](/mobile-app/firebase-auth) for the exact steps.

## Do I need to run a backend server?

No. Tic Tac Toe does not require a dedicated backend server or hosting environment — Firebase handles authentication, real-time multiplayer communication, player data, and cloud storage.

## Compatibility Requirements

To ensure optimal performance of the Tic Tac Toe app, follow the compatibility guidelines below:

### Flutter App Compatibility
- **Flutter Version**: latest stable channel (see [Setup Flutter](/mobile-app/setup-flutter))

### Backend / Services
- **Firebase Plan**: Blaze (Pay-as-you-go)
- **Services used**: Firebase Authentication, Firebase Realtime Database, Firebase Storage
