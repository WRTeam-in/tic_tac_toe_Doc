---
sidebar_position: 6
---

# How to Change the Application Font

1. Add your font file under `assets/fonts/`, then register it in `pubspec.yaml`:

   ```yaml
   fonts:
     - family: tangerine
       fonts:
         - asset: assets/fonts/tangerine.ttf
           weight: 700
   ```

2. Use it by passing the family name to `CustomText`, the app's shared text widget (`lib/common/widgets/custom_text.dart`):

   ```dart
   CustomText(
     'Tic Tac Toe',
     family: 'tangerine',
   )
   ```

   <!-- TODO: add code screenshot — pubspec.yaml fonts section, and lib/screens/splash_screen.dart where `family: 'tangerine'` is used -->

   Currently `tangerine` is only used on the splash screen (`lib/screens/splash_screen.dart`). There's no single global app-wide font — each `CustomText` falls back to the system default unless you pass `family`, so apply your font wherever you want it, or thread it through more widgets to make it the default everywhere.

## Font sizes

Separately, shared text sizes (not families) are centralized in `lib/core/theme/font_sizes.dart`:

```dart
class FontSizes {
  final double extraSmall = 10.0;
  final double small = 12.0;
  final double normal = 14.0;
  final double medium = 16.0;
  final double large = 18.0;
  final double xL = 20.0;
  final double xXL = 24.0;
}
```


