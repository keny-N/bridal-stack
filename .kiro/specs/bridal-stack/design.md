# Design Document: bridal-stack (Setlist Edition)

## Overview
セットリスト共有に特化したミニマルな設計。不要な機能を削ぎ落とし、新郎新婦のメッセージを際立たせる。

### Goals
- **シングルフォーカス**: セットリストへの導線を最優先にする。
- **ネタバレ防止UI**: ゲストの期待感を高めるインタラクション。

## Architecture

### Routing Map
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | ホーム画面（セットリストへの案内） |
| `/setlist` | `SetlistPage` | ネタバレ防止機能付きセットリスト |

### Components
- `MenuTile`: ホーム画面のメインボタン（現在は「セットリスト」のみ）。
- `BottomNav`: 「Home」と「Setlist」の2大メニュー。
- `SetlistItem`: シーン名のみを表示し、タップで開閉。
- `SongDetail`: 曲名、アーティスト名、想い、YouTubeリンクを表示。

## Data Schema
`public/data/setlist.json` に全10シーン（再入場候補を含む）の情報を保持。
