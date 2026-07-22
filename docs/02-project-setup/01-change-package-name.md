# How to change the package name

## Android

1. In the Android panel, click the gear icon and uncheck **Compact Empty Middle Packages**.

   ![Uncheck compact empty middle packages](../../images/app/packagename_1.jpg)

2. Your package directory will now be broken up into individual directories.

   ![Package directories](../../images/app/packagename_2.png)

3. Select each directory you want to rename: right-click it → **Refactor** → **Rename**.

   ![Refactor rename](../../images/app/packagename_3.jpg)

4. Enter the new name and hit **Refactor**. Give Android Studio a minute to update everything.

   ![Confirm refactor](../../images/app/packagename_4.jpg)

5. Press `Ctrl+Shift+R` and replace the old package name with your new one everywhere it still appears (`build.gradle`, `AndroidManifest.xml`, etc.).

   ![Find & replace package name](../../images/app/packagename_5.jpg)

> **Tip:** you can also use the [`change_app_package_name`](https://pub.dev/packages/change_app_package_name) pub package to rename the Android/iOS package name in one command instead of doing it manually.

## iOS

Open `ios/Runner/Info.plist`, find the `CFBundleIdentifier` key, and change its string value as shown below.

![Change bundle identifier](../../images/app/packagename_6.jpg)
![Change package name iOS](../../images/app/changePackageName.png)

## VS Code

If you're using VS Code, press `Ctrl+F` (project-wide search) for the old package name in the files shown below and replace it with your new package name.

![Search and replace package name](../../images/app/package_name1.jpg)
