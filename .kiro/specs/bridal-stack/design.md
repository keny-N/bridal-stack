# Design Document: bridal-stack

## Overview
結婚式のゲストがBGMセットリストと新郎新婦のメッセージを閲覧するためのWebアプリケーション。
「シンプル・直感・拡張性」を核とし、1日限りのイベントで最高のUXを提供するための技術設計を行う。

### Goals
- **爆速な表示**: ネットワークが不安定な会場でも瞬時に表示される（SSGの活用）。
- **迷わないUI**: 説明不要で使えるアコーディオン形式のリスト。
- **柔軟なデータ更新**: 直前の曲目変更にもJSONの編集だけで対応可能。
- **拡張性**: プロフィールやメニュー機能の追加が容易なコンポーネント構成。

### Non-Goals
- ゲストからのコメント投稿機能（初期フェーズでは対象外）。
- 楽曲のストリーミング再生（著作権および通信量の観点から対象外）。

## Architecture

### Technology Stack

| Layer | Choice | Role |
|-------|--------|------|
| Frontend | Next.js (App Router) + TypeScript | 高速なSSG、コンポーネントベースの開発 |
| Styling | Vanilla CSS (CSS Modules) | ユーザーの好みに合わせた柔軟で軽量なスタイリング |
| Data | Static JSON (`setlist.json`) | メンテナンス性を重視したシンプルなデータ管理 |
| Hosting | Vercel | GitHub連携による自動デプロイ、高速配信 |

## Components and Interfaces

### UI Components

| Component | Intent | Req Coverage | Key Dependencies |
|-----------|--------|--------------|------------------|
| `Header` | アプリタイトルとナビゲーションスペース | F01 | - |
| `SetlistContainer` | JSONデータを読み込み、リストを表示する親 | F01 | `setlist.json` |
| `SetlistItem` | 各シーンの概要を表示するアコーディオン親 | F01 | - |
| `SongDetail` | メッセージと歌詞を表示するアコーディオン子 | F02 | - |
| `BottomNav` | 将来の拡張用ナビゲーション（初期はプレースホルダ） | NF01 | - |

## Data Models

### setlist.json 構造定義
```json
[
  {
    "id": "string (unique)",
    "scene_name": "string (例: 新郎新婦入場)",
    "song_title": "string",
    "artist_name": "string",
    "message": "string (選曲の想い)",
    "lyrics": "string (サビ等の歌詞テキスト)",
    "lyrics_url": "string (オプション: 外部歌詞サイトURL)"
  }
]
```

## Testing Strategy
- **表示テスト**: 各シーンのデータが正しくリスト表示されるか。
- **UI動作テスト**: リストをタップして詳細（アコーディオン）がスムーズに開閉するか。
- **レスポンシブテスト**: iPhone/Androidの各種画面サイズでレイアウトが崩れないか。
- **ダークモード視認性**: 暗い環境を想定した配色での文字の読みやすさ。

## Optional Sections

### Security & Privacy
- **ログイン不要**: ゲストの利便性を最優先し、認証は行わない。
- **非公開性**: 必要に応じて、URLにランダムな文字列（ハッシュ）を含めることで、検索エンジンへの露出を防ぐ。

### Performance
- **Zero Runtime JS (理想)**: セットリストの表示だけであれば、極力クライアントサイドの処理を減らし、初回ペイントを高速化する。
