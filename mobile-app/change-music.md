---
sidebar_position: 15
---

# How to Change Music

All background music and sound effects are handled by `lib/core/services/sound_service.dart` (`SoundService`), using the [`audioplayers`](https://pub.dev/packages/audioplayers) package. Audio files live in `assets/music/`:

- `music.mp3` — looping background music, played via `SoundService.playBackgroundMusic()` / stopped via `stopBackgroundMusic()`.
- `click.mp3` — button tap sound effect.
- `wingame.mp3` — played on winning a match; background music auto-pauses and resumes around it.

## To replace a sound

1. Add your file under `assets/music/` (already registered under `flutter > assets` in `pubspec.yaml`).
2. Keep the same file name (`music.mp3`, `click.mp3`, or `wingame.mp3`) so no code changes are needed, or update the `AssetSource(...)` path in `sound_service.dart` if you rename it.

## Mute / unmute

Players can toggle sound from Settings (`lib/screens/settings/widgets/sound_toggle_card.dart`), which calls `SoundService.setEnabled()`. The preference persists via `LocalStorage.isSoundEnabled()` / `setSoundEnabled()`.
