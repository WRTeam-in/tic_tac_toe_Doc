---
sidebar_position: 4
---

# How to Change Package Name in Flutter

Changing your app's package name (also known as application ID or bundle identifier) is essential for publishing a unique version of your app on the Play Store or App Store.

## 📘 Guide to Change Package Name

[View Package Name Change Guide](https://www.marketplace.wrteam.in/docs/flutter-common-doc/GeneralSettings/packagename/)

### 🔧 What's Included

- Steps to rename the Android package and iOS bundle identifier
- Folder structure adjustments
- Configuration and build file updates

### ▶️ Rerun These Commands After Renaming

```bash
flutter clean
flutter pub get
```

### ⚠️ Important

Update the directory structure and configuration files correctly for both Android and iOS to avoid build errors.

## ❓ Common Questions

### 🔹 Q1: What if my package name is `com.tictac.wrteam.TicTacToe`?

✅ **Answer:** You need to create 4 nested folders inside the `kotlin` directory as per your package name:

```
com/tictac/wrteam/TicTacToe/
```

Each segment of the package name (split on `.`) becomes one nested folder under `android/app/src/main/kotlin/`.
