# Design Document: bridal-stack (Portal Edition)

## Overview
ホーム画面を起点とし、複数の情報（セットリスト、式場公式サイト、館内図、スケジュール）を提示する「ゲスト用総合ポータル」への拡張設計。

### Goals
- **ポータル（玄関口）の確立**: `/`（ルート）をホーム画面とし、直感的なタイルUIを導入する。
- **ルーティング構成の最適化**: `src/app` 配下に各機能ごとのページを配置する。
- **一貫したナビゲーション**: 全画面に共通の `BottomNav` を配置し、ホームへの即時復帰を可能にする。

## Architecture

### Routing Map
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | ポータル画面（タイルボタン配置） |
| `/setlist` | `SetlistPage` | BGMセットリスト画面（既存機能の移設） |
| `/map` | `MapPage` | 館内図画面 |
| `/schedule` | `SchedulePage` | タイムライン画面 |

### Technology Stack
- **Next.js (App Router)**: 標準のルーティング機能（Linkコンポーネント）を使用。

## Components and Interfaces

### New UI Components
| Component | Intent | Req Coverage |
|-----------|--------|--------------|
| `MenuTile` | ホーム画面に配置する押しやすいタイル型ボタン | F03 |
| `WelcomeMessage` | ゲストを歓迎する華やかなセクション | F03 |

## BottomNav Layout
- **Home**: ポータル画面への遷移。
- **Setlist**: セットリスト画面への遷移。
- **(Other)**: 将来的に機能が増えた場合のみ追加。初期は上記2つのみ表示。
