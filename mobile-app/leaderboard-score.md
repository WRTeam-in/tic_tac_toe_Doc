---
sidebar_position: 15
---

# How to Change Leaderboard Score Calculation Values

Go to `lib/constants/settings.dart` and edit the values below (do not change the variable names):

```dart
/// Leaderboard score awarded per finished match. Applied once per game at
/// settlement; `matchplayed` always increments and `matchwon` increments
/// for the winner. Tune freely.
static const int scoreForWin = 10;
static const int scoreForDraw = 5;
static const int scoreForLoss = 0;
```


- `scoreForWin` — added to a player's total score when they win a match.
- `scoreForDraw` — added to both players' total score when a match ends in a draw.
- `scoreForLoss` — added to the losing player's total score (`0` by default — losses don't deduct points).

The ranking/tiebreak logic itself (highest score first, ties broken by who joined first) lives in `lib/data/repositories/leaderboard_ranking.dart` if you need to change *how* players are ordered rather than *how many* points a result is worth.

