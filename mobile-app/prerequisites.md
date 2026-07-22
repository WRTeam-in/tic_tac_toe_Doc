---
sidebar_position: 2
---

# App Prerequisites

:::info
Whenever you seek support for WRTeam products via Skype or WhatsApp, please share your **Purchase Code** and **Codecanyon username**. This information is required for verification in our system. Without it, we are unable to provide support in accordance with Codecanyon policy.
:::

## 🚀 Setup Essentials

Follow the [Flutter Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup/) to configure your environment (Flutter SDK, Java JDK, IDE) before opening the project.

## 🧰 Required Software

Verified working with:

- **Flutter** — 3.44.6 (stable channel) or newer. This project's `pubspec.yaml` pins Dart SDK `^3.6.0`, which ships with Flutter 3.27+ — 3.44.6 is the version this build was last verified against.
- **Android SDK** — 36.1.0 (via Android Studio or the command-line tools)
- **Android Studio** or **Visual Studio Code** (latest stable)
- **Java (JDK)** — 17 or newer, required to run this project's Gradle version (8.14)

## 🍏 Additional Requirements for macOS (iOS builds)

- **Xcode** — 26.6 or newer
- **CocoaPods** (latest)
- **Homebrew** (recommended, for installing CocoaPods)

Run `flutter doctor` to confirm your setup — everything above should show a green checkmark:

```
[✓] Flutter (Channel stable, 3.44.6, on macOS 26.5.2 25F84 darwin-arm64, locale en-US)
[✓] Android toolchain - develop for Android devices (Android SDK version 36.1.0)
[✓] Xcode - develop for iOS and macOS (Xcode 26.6)
[✓] Chrome - develop for the web
```

:::warning
Use the Flutter **stable** channel. Running on `beta`/`master` can produce build errors that aren't covered by support.
:::
